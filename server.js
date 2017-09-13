var express = require('express');
var app = express();

// BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers')); //Automatically finds index.js
app.use(express.static('client/build')); //So no need of get ('/') route definition in index.js - check this

app.listen(3000, function () {
  console.log('The countries are running on port ' + this.address().port);
});
