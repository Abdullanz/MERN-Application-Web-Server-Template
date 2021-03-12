//==============================================================================================================
// FileName: server.js
// Date: 12 March, 2021
// Description: This file is the server file that contains the main elements for the backend of this application
// Author: Abdullah Najjar
//==============================================================================================================

//TODO: Setup routing using Axios in the frontend and the backend

const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT);
const bodyParser = require('body-parser'); // This is used to create middlewares to handle objects
const cors = require('cors');

//Call the routes 
const testAPIRouter = require("./Routes/TestAPI");

//To enable CORS for the applications' apis
app.use(cors());

//To handle JSON Objects specifically
app.use(bodyParser.json());

//To set up the body parser
app.use(bodyParser.urlencoded({ extended: true }));

//GET request and the response
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//POST request and the response
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

//To point the server to render the build file which only contains the static files of the frontend
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//Routes for the applications backend
app.use("/testAPI", testAPIRouter);

//specifying which port to run the server
server.on('listening', () => {
    console.log('Server is listening...');
});