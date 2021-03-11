const express = require('express')
const app = express()
const path = require("path")
const PORT = 8000;
const server = app.listen(PORT);

//TODO: FIX THE ROUTING ISSUE FOR THE CAR COMPONENT!


//To point the server to render the build file for the frontend
app.use(express.static(path.join(__dirname, 'client/build')));

//specifying which port to run the server
server.on('listening', () => {
    console.log('Server is listening...');
});