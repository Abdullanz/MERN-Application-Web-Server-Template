const express = require('express')
const app = express()
const path = require("path")
const PORT = 8000;
const server = app.listen(PORT);
const bodyParser = require('body-parser'); // This is used to create middlewares to handle objects

//TODO: FIX THE ROUTING ISSUE FOR THE CAR COMPONENT!

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//GET request
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//POST request
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

//specifying which port to run the server
server.on('listening', () => {
    console.log('Server is listening...');
});