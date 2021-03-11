const express = require('express')
const app = express()
const path = require("path")
const PORT = 8000;
const server = app.listen(PORT);

//To point the server to render the build file for the frontend
app.use(express.static(path.join(__dirname, 'client/build')));

//specifying which port to run the server
server.on('listening', () => {
    console.log('Server is listening...');
});