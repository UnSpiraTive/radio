// ===============================BASSIC SERVER SETUP
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

    // configure app to use bodyParser()
    // this will let us get the data from a POST
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var port = process.env.PORT || 8080;        // set our port

    // ============================Routers for API
    var router = express.Router();

    router.use(function(req, res, next) {
      // do logging
      console.log('Something is happening.');
      next(); // make sure we go to the next routes and don't stop here
    });

    router.get('/', function(req,res){
      console.log("aaa");
      // res.send('Hello world')
      res.json({message: 'Witaj!'});
    });

    app.use('/', router);

    app.listen(port, function () {
      console.log('Example app listening on port: ' + port)
    });
