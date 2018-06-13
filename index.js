'use strict';
/*
  REQUIRED MODULES
*/
const express = require('express');

const app = express();
// use the json parser middleware
// when app receives a request, this middleware will parse the incoming req
// body as json and make it accessable on the req.body property

// on request to / questions, usher into routes module


// specify a port to serve the app on
const port = process.env.PORT || 3000;
// start the server
// callback function activates once server begins to listen for requests
// this is the second parameter in app.listen

app.post('/sms', (req, res) => {
  res.send(req.body);

  // const smsCount = req.session.counter || 0;
  //
  // const message = 'Hello, thanks for the new message.';
  //
  // if(smsCount > 0) {
  //   message = 'Hello, thanks for message number ' + (smsCount + 1);
  // }
  //
  // req.session.counter = smsCount + 1;
  //
  // const twiml = new MessagingResponse();
  // twiml.message(message);
  //
  // res.writeHead(200, {'Content-Type': 'text/xml'});
  // res.end(twiml.toString());
});

app.listen(port, function(){
  console.log(`Express server is listening on port ${port}`);
});


// const express = require('express');
//
// const VoiceResponse = require('twilio').twiml.VoiceResponse;
//
// const response = new VoiceResponse();
// const dial = response.dial();
// dial.number('415-123-4567');
//
// console.log(response.toString());
