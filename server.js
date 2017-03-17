'use strict';
// ================================Import section
let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

// ================================Variable section
let app = express(),
port = process.env.PORT || 8080,        // set our port
router = express.Router();

// ===============================BASSIC SERVER SETUP
    // configure app to use bodyParser()
    // this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ============================Routers for API
router.use((req, res, next)=>{
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', (req,res)=>{
  // console.log("aaa");
  // res.send('Hello world')
  // res.json({message: 'Witaj moj drogi przyjacielu!'});
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use('/', router);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.listen(port, ()=>{
  console.log('Example app listening on port: ' + port)
});
