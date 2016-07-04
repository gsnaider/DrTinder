#include <iostream>
#include <thread>
#include <mutex>

#include "../libs/loger/easylogging++.h"
#include "XMPPServer.h"
#include "Server.h"
INITIALIZE_EASYLOGGINGPP
#define ELPP_THREAD_SAFE

#define QUIT_LINE "quit"

/* Check std::cin for QUIT_LINE. */
void hasToQuit(bool& result,  std::mutex& result_mutex) {
	std::string line;
	while (line.compare(QUIT_LINE) != 0) {
		std::cin >> line;
	}
	result_mutex.lock();
	result = true;
	result_mutex.unlock();
}

void listenXMPP(Swift::SimpleEventLoop& eventLoop) {
	eventLoop.run();
}

void setUpDatabase(rocksdb::DB** db, std::string db_name) {
	rocksdb::Options options;
	options.create_if_missing = true;

	LOGG(INFO) << "Opening " << db_name;

	rocksdb::Status status = rocksdb::DB::Open(options, db_name, db);
	if (! status.ok()) {
		LOGG(ERROR) << "Could not open database";
	}else{
		LOGG(INFO) << "Conexion exitosa a la base de datos";
	}
}

/* Set up server and listen to incomming connections. */
int main(int argc, char**argv) {
	RestClient::init();
	std::string port,shared;
	configure(argc,argv,port,shared);
	Server server(port,shared);

	rocksdb::DB* usersDB;
	setUpDatabase(&usersDB, "usersDB");

	server.setUsersDB(usersDB);

	Swift::SimpleEventLoop eventLoop;
	Swift::BoostNetworkFactories networkFactories(&eventLoop);
	XMPPServer xmppServer(&networkFactories);

	rocksdb::DB* chatDB;
	setUpDatabase(&chatDB, "chatDB");
	rocksdb::DB* likesDB;
	setUpDatabase(&likesDB, "likesDB");

	xmppServer.setChatDB(chatDB);
	xmppServer.setLikesDB(likesDB);

	std::mutex xmpp_mutex;
	std::thread xmpp_thread(listenXMPP, std::ref(eventLoop));

	server.setChatDB(chatDB);
	server.setLikesDB(likesDB);
	server.updateServer();

	bool quit = false;
	LOGG(INFO) << "Opening server";
	std::mutex quit_mutex;
	std::thread quit_control_thread(hasToQuit, std::ref(quit), std::ref(quit_mutex));

	quit_mutex.lock();
	while (! quit) {
		quit_mutex.unlock();
		server.run();
		quit_mutex.lock();
	}
	quit_mutex.unlock();

	xmppServer.close();
	xmpp_thread.join();
	quit_control_thread.join();
	RestClient::disable();
	LOGG(INFO) << "Closing server";
    return 0;
}
