//==============================================================================================================
// FileName: server.js
// Date: 12 March, 2021
// Description: This file is the server file that contains the main elements for the backend of this application
// Author: Abdullah Najjar
//==============================================================================================================

//TODO: Compelete 3 pages in the frontend, configure apis for CRUD operations and connect db

const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT);
const bodyParser = require('body-parser'); // This is used to create middlewares to handle objects
const cors = require('cors');
// const db = require("./Models");
var AWS = require("aws-sdk");


//AWS Configurations
AWS.config.update({region: 'us-east-1'});
console.log("Region: ", AWS.config.region);


//Call API routes 
const testAPIRouter = require("./Routes/TestAPI");
const IndexAPIRouter = require("./Routes/IndexAPI");

//To enable CORS policy
app.use(cors());

//To handle JSON Objects specifically
app.use(bodyParser.json());

//To set up the body parser
app.use(bodyParser.urlencoded({ extended: true }));

//Routes for the APIs
app.use("/testAPI", testAPIRouter);
app.use("/IndexAPI", IndexAPIRouter);

//To point the server to render the build file which only contains the static files of the frontend
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });


//specifying which port to run the server
server.on('listening', () => {
    console.log('Server is listening...');
});