#include "XMPPServer.h"


using namespace Swift;
using namespace boost;
using XMPPMessageHandler;

XMPPServer::XMPPServer(NetworkFactories* networkFactories) :
        jid(FIREBASE_SERVER_SEND_URL) {
    component = new Component(jid, "XMPPServer", networkFactories);
    component->onConnected.connect(bind(&XMPPServer::handleConnected, this));
    component->onMessageReceived.connect(
            bind(&XMPPServer::handleMessageReceived, this, _1));
    component->onPresenceReceived.connect(
            bind(&XMPPServer::handlePresenceReceived, this, _1));
    tracer = new ComponentXMLTracer(component);
    component->connect(FIREBASE_SERVER_SEND_URL, FIREBASE_SERVER_PORT);
}

XMPPServer::~XMPPServer() {
    delete tracer;
    delete component;
}

void XMPPServer::handlePresenceReceived(Presence::ref presence) {
    // Automatically approve subscription requests
    if (presence->getType() == Presence::Subscribe) {
        Presence::ref response = Presence::create();
        response->setTo(presence->getFrom());
        response->setType(Presence::Subscribed);
        component->sendPresence(response);
    }
}

void XMPPServer::handleConnected() {
}

void XMPPServer::handleMessageReceived(Message::ref message) {
    boost::optional<boost::posix_time::ptime> timestamp = message->getTimestamp();

    std::string body = message->getBody().get();
    XMPPMessageHandler msgHandler(body);

    XMPPMessageHandler::XMPPMessageType type = msgHandler.getType();
    switch (type) {
        case XMPPMessageHandler::Chat :
            resendMessage(msgHandler);
            msgHandler.saveMessage(timestamp);
            break;
        case XMPPMessageHandler::Like :
            msgHandler.saveLike();
            break;
        case XMPPMessageHandler::Dislike :
            msgHandler.saveDislike();
    }

}

void XMPPServer::resendMessage(XMPPMessageHandler& msgHandler) {
    Message receiver_message;

    receiver_message.setTo(msgHandler.getReceiver());
    receiver_message.setBody(msgHandler.formResendMessage());

    component->sendMessage(&receiver_message);
}


