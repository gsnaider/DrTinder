#include "RequestHandler.h"

#define MAX_LEN_TOKEN_BUFFER 100
#define BUFFER_SMALL_SIZE 20


RequestHandler::RequestHandler(http_message *pMessage, mg_connection *pConnection) :
    connection(pConnection), http_msg(pMessage) {

	server_databases_t *databases = ((server_databases_t *) connection->user_data);
	msgHandler = new MessageHandler(databases);

}

RequestHandler::RequestHandler(http_message *pMessage, mg_connection *pConnection, std::string shared) :
    connection(pConnection), http_msg(pMessage) {
	server_databases_t *databases = ((server_databases_t *) connection->user_data);
	msgHandler = new MessageHandler(databases);
	msgHandler->setSharedLink(shared);
}


RequestHandler::~RequestHandler() {

}

void RequestHandler::sendHttpLine(int status_code) {
    mg_send_response_line(connection, status_code, NULL);
}

void RequestHandler::sendHttpReply(std::string reply, std::string content_type) {
	LOGG(DEBUG) << "Sending reply";
	mg_printf(connection, "HTTP/1.1 %d\r\n"
                      "Content-Type: %s\r\n"
                      "Content-Length: %d\r\n"
                      "\r\n"
                      "%s", STATUS_OK, content_type.c_str(),
              (int) reply.length(), reply.c_str());
}

bool RequestHandler::validateToken() {
	LOGG(DEBUG) << "Validating Token for connection";
    char buffer[MAX_LEN_TOKEN_BUFFER];
    int parsed = mg_get_http_var(&http_msg->query_string, TOKEN_VARIABLE_NAME, buffer, sizeof(buffer));

    std::string token(buffer);
    if (! msgHandler->validateToken(token)) {
        LOGG(INFO) << "Token expired";
        return false;
    }
    return true;
}

void RequestHandler::rejectConnection(int error_code) {
	LOGG(DEBUG) << "Rejected Connection " << error_code;
    sendHttpLine(error_code);
    connection->flags |= MG_F_SEND_AND_CLOSE;
}

bool RequestHandler::parseAuthorization(string &user, string &pass) {
	char user_[BUFFER_SMALL_SIZE], pass_[BUFFER_SMALL_SIZE];
	
    struct mg_str *hdr = mg_get_http_header(http_msg, AUTHORIZATION_HEADER);
    mg_http_parse_header(hdr, AUTHORIZATION_HEADER_USER, user_, sizeof(user_));
    mg_http_parse_header(hdr, AUTHORIZATION_HEADER_PASS, pass_, sizeof(pass_));


    if (! is_equal(&http_msg->uri, USERS_URI) && ! is_equal(&http_msg->uri, USER_URI)) {
    	rejectConnection(NOT_IMPLEMENTED);
        return false;
    }
    user = std::string(user_);
    pass =  std::string(pass_);
    LOGG(DEBUG) << "Auth header parsed for " << user;
    return true;
}

bool RequestHandler::login() {
    if (msgHandler->isUserSet()){
    	return validateToken();
    }
    rejectConnection(UNAUTHORIZED);
    LOGG(DEBUG) << "PREVENT UNAUTHORIZED ACCES";
    return false;
}

void RequestHandler::listenUserRequest() {
	LOGG(DEBUG) << "Listening User Request";
    if (is_equal(&http_msg->method, POST_S)) {
    	LOGG(DEBUG) << POST_S;
        string user, pass;
        if (! parseAuthorization(user, pass)) {
            return;
        }
        if (! msgHandler->authenticate(user, pass) ) {
            rejectConnection(UNAUTHORIZED);
            return;
        }
        msgHandler->setUser(user);
        LOGG(DEBUG) << "Logged in: " << user;
        char localization[500];
        int parsed = mg_get_http_var(&http_msg->body, USER_LOCATION_TOKEN, localization, sizeof(localization));

        if (parsed <= 0 ){
        	sendHttpLine(BAD_REQUEST);
        	return;
        }
        bool updated = msgHandler->addLocalization(std::string(localization));
        if (! updated){
        	sendHttpLine(BAD_REQUEST);
        }else{
        	sendHttpLine(STATUS_OK);
        }
        return;
    }

    if (! login()) {
    	return;
    }

    if (is_equal(&http_msg->method, GET_S)) {
    	LOGG(DEBUG) << GET_S;
        char username[BUFFER_SMALL_SIZE];
        int parsed = mg_get_http_var(&http_msg->query_string, QUERY_STRING_RESOURCE_ID, username, sizeof(username));

        if (parsed <= 0 ) {
        	sendHttpLine(BAD_REQUEST);
			return;
		}
        std::string user_data;
        msgHandler->getUser(std::string(username), user_data);

        sendHttpReply(user_data, CONTENT_TYPE_HEADER_CSV);
        return;
    }

    sendHttpLine(NOT_IMPLEMENTED);
}

void RequestHandler::listenUsersRequest() {
	LOGG(DEBUG) << "Listening UserS request";
    if (is_equal(&http_msg->method, POST_S)) {
    	LOGG(DEBUG) << POST_S;
        char user_data[1000];
        string user, pass;
        if (! parseAuthorization(user, pass)) {
            return;
        }
        int parsed = mg_get_http_var(&http_msg->body, BODY_USER, user_data, sizeof(user_data));
		if (parsed <= 0 ) {
			sendHttpLine(BAD_REQUEST);
			return;
		}
        try {
        	msgHandler->setUser( user );
            bool created = msgHandler->createUser(std::string(user_data), std::string(pass));
            if (! created){
            	LOGG(DEBUG) << "Cannot create user "  << user;
            	rejectConnection(BAD_REQUEST);
            }else{
            	sendHttpReply(user_data, CONTENT_TYPE_HEADER_CSV);
            }

        } catch (ExistentUserException existentUserException) {
            rejectConnection(UNAUTHORIZED);
            LOGG(DEBUG) << "Already existed";
        }
        return;
    }
    if (! login()) {
    	return; }

    if (is_equal(&http_msg->method, GET_S)) {
    	LOGG(DEBUG) << GET_S;
        std::string users_data;
        msgHandler->getUsers(users_data);
        sendHttpReply(users_data, CONTENT_TYPE_HEADER_CSV);

    } else if (is_equal(&http_msg->method, PUT_S)) {
    	LOGG(DEBUG) << PUT_S;
        char user_data[1000];
        int parsed = mg_get_http_var(&http_msg->body, BODY_USER, user_data, sizeof(user_data));
		if (parsed <= 0 ) {
			sendHttpLine(BAD_REQUEST);
			return;
		}
        bool updated = msgHandler->updateUser(string(user_data));
        int status = (updated) ? STATUS_OK: BAD_REQUEST;
        sendHttpLine(status);

    } else if (is_equal(&http_msg->method, DELETE_S)) {
    	LOGG(DEBUG) << DELETE_S;
        bool deleted = msgHandler->deleteUser();
        int status = (deleted) ? STATUS_OK: BAD_REQUEST;
        sendHttpLine(status);

    } else {
    	rejectConnection(NOT_IMPLEMENTED);
    }

}

void RequestHandler::listenIdRequest() {
	LOGG(DEBUG) << "Listening ID request";
    if (! is_equal(&http_msg->method, GET_S)) {
    	sendHttpLine(NOT_IMPLEMENTED);
        return;
    }
    sendHttpReply(msgHandler->getToken(), TOKEN_VARIABLE_NAME);
}

void RequestHandler::listenInterestRequest() {
	LOGG(DEBUG) << "Listening Interest request";
    if (! is_equal(&http_msg->method, GET_S)) {
    	sendHttpLine(NOT_IMPLEMENTED);
    }

    if (! login()) {
    	return;
    }

    LOGG(DEBUG) << GET_S;
    char id_interest[BUFFER_SMALL_SIZE];
    int parsed = mg_get_http_var(&http_msg->query_string, QUERY_STRING_RESOURCE_ID, id_interest, sizeof(id_interest));
	if (parsed <= 0 ) {
		sendHttpLine(BAD_REQUEST);
		return;
	}
    std::string interest_photo;
    msgHandler->getInterestPhoto(interest_photo, std::string(id_interest));
    sendHttpReply(interest_photo, CONTENT_TYPE_HEADER_IMAGE);
}

void RequestHandler::listenChatRequest() {
	LOGG(DEBUG) << "Listening chat request";
    if (! is_equal(&http_msg->method, GET_S)) {
    	sendHttpLine(NOT_IMPLEMENTED);
    }
    LOGG(DEBUG) << GET_S;

    char friend_name[BUFFER_SMALL_SIZE];
    std::string reply;
    if (! login()) {
    	return; }

    if (mg_get_http_var(&http_msg->query_string, QUERY_STRING_RESOURCE_ID, friend_name, sizeof(friend_name)) == 0) {
        msgHandler->getChat(string(friend_name), reply);
    } else {
        msgHandler->getMatches(reply);
    }
    sendHttpReply(reply, CONTENT_TYPE_HEADER_CSV);
}

void RequestHandler::listenPhotoRequest() {
	LOGG(DEBUG) << "Listening photo request";
    if (! login()) { return; }

    if (is_equal(&http_msg->method, GET_S)) {
    	LOGG(DEBUG) << GET_S;
        char username[BUFFER_SMALL_SIZE];
        int parsed = mg_get_http_var(&http_msg->query_string, QUERY_STRING_RESOURCE_ID, username, sizeof(username));
		if (parsed <= 0 ) {
			sendHttpLine(BAD_REQUEST);
			return;
		}
        std::string photo_64;
        msgHandler->getPhoto(std::string(username), photo_64);
        sendHttpReply(photo_64, CONTENT_TYPE_HEADER_IMAGE);
    } else if (is_equal(&http_msg->method, POST_S)) {
    	LOGG(DEBUG) << POST_S;
    	std::string photo_64(http_msg->body.p, http_msg->body.len);
        bool posted = msgHandler->postPhoto(photo_64);
        int status = (posted) ? STATUS_OK: BAD_REQUEST;
        sendHttpLine(status);

    } else {
        sendHttpLine(NOT_IMPLEMENTED);
    }
}
