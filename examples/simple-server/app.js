var express = require('express');
var app = express();

// Overwrite the default Jade engine with this one
app.engine('jade', require('express-beautiful-jade-engine'));
 
// Set the default view engine to the EBJE
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', {
  	title: 'Hello world',
  	body: 'Thanks for using EBJADE!'
  });
});

var server = app.listen(3000);