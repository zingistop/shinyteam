// Port for the Express web server
var PORT = 3000;



// Import Express and initialise the web server
var express = require('express');
var app = express();
var server = app.listen(PORT);
app.use(express.static('public'));

console.log('Node.js Express server running on port ' + PORT);
