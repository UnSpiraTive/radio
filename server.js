'use strict';
// ================================Import section
let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

// ================================Custom Importe
let ErrorClass    = require('./backend/ErrorClass'),
    dbCon         = require('./backend/dbConnections'),
    News          = require('./backend/News'),
    Presenters    = require('./backend/Presenters');

// ================================Class def
let errClass  = new ErrorClass(dbCon.mysqlConnect),
    newsInstant = new News(dbCon.mysqlConnect, errClass),
    presentersInstant  = new Presenters(dbCon.mysqlConnect, errClass);




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
    res.sendFile(path.join(__dirname + "/public/index.html"));

    //MYSQL Query
    newsInstant.getChoosenNews(3,(res)=>{
      console.log(res);
    });

    presentersInstant.addPresenter([0, 'jakis', 'roloslaw', 2], (res) =>{
      console.log(res);
    });
    // newsInstant.addNews([10,15,13], ()=>{});
    // newsInstant.getAllNews((res)=>{
    // console.log(res[0]);
    // });
});

app.use('/', router);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.listen(port, ()=>{
  console.log('Example app listening on port: ' + port)
});
