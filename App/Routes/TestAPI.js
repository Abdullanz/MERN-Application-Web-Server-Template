//==============================================================================================================
// FileName: server.js
// Date: 12 March, 2021
// Description: This file contains the TestAPI route 
// Author: Abdullah Najjar
//==============================================================================================================

var express = require('express');
var router = express.Router();// To enable routing using express

//the main route for the testAPI 
router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router;