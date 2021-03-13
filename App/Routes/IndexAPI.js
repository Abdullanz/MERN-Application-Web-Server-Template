//==============================================================================================================
// FileName: server.js
// Date: 12 March, 2021
// Description: This file contains the TestAPI route 
// Author: Abdullah Najjar
//==============================================================================================================

var express = require('express');
var router = express.Router();// To enable routing using express

//GET request and the response
router.get('/', function(req, res, next) {
  res.send({ express: 'Hello From Express' });
});

//POST request and the response
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

module.exports = router;