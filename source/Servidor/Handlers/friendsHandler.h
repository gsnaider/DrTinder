/*
 * friendsHandler.h
 *
 *  Created on: May 31, 2016
 *      Author: tobias
 */

#ifndef SERVIDOR_FRIENDSHANDLER_H_
#define SERVIDOR_FRIENDSHANDLER_H_

#include "Handler.h"

class friendsHandler: public Handler {
public:
	friendsHandler();
	HttpResponse httpGet(struct http_message *hm);
	virtual ~friendsHandler();
};

#endif /* SERVIDOR_FRIENDSHANDLER_H_ */
