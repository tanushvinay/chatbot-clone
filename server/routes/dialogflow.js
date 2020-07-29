const express = require('express');
const dialogflow = require('dialogflow');
const uuid = require('uuid');
const router = express.Router();
const structjson = require('./structjson.js');
const config = require('../config/keys');
const projectId = config.googleProjectID;
const sessionID = config.dialogFlowSessionID;
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);
const languageCode  = config.dialogFlowSessionLanguageCode

router.post('/textQuery', async (req,res)=>{
    //send from client to dialogflow
    
 

    
    // The text query request.
        const request = {
            session: sessionPath,
            queryInput: {
            text: {
            // The query to send to the dialogflow agent
            text: req.body.text,
            // The language used by the client (en-US)
            languageCode: 'en-US',
                  },
                },
            };
 
  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }


})

router.post('/eventQuery', async (req,res)=>{
    //send from client to dialogflow
    
 

    
    // The text query request.
        const request = {
            session: sessionPath,
            queryInput: {
            event: {
            // The query to send to the dialogflow agent
            text: req.body.event,
            // The language used by the client (en-US)
            languageCode: 'en-US',
                  },
                },
            };
 
  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }


})



module.exports = router;
