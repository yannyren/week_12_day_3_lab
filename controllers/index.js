var express = require('express')
var router = express.Router();
var path = require('path');


// Main route; sends back HTML to the browser when http://localhost:3000/
// router.get('/', function(req, res){
//     res.sendFile(path.join(__dirname + '/../client/build/index.html'))
// });

router.use('/api/countries', require('./countries'));

module.exports = router;
