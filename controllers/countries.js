var express = require('express');
var countriesRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;

// Define here so only need to connect to the db once.
// Better than having to connect with every operation
MongoClient.connect('mongodb://localhost:27017/country', function(err, database){
    if (err) return;
    db = database;
});
// this is really /api/countries/
countriesRouter.get('/', function(req, res) {
    db.collection('countries').find().toArray(function(err, results){
       console.log(db.collection('countries').find());
        if(err) console.log('oops' + err.toString());
        res.json(results);
    });
});

//show


//Edit

//Update


//Create
countriesRouter.post('/', function(req, res){
    console.log(req.body);
    db.collection('countries').insertOne(req.body, function(err, response){
        //res.redirect('/api/animals');
        res.json(response);
    })
    
})


//Delete



module.exports = countriesRouter;
