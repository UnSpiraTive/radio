//===========================IMPORT MODULE
let express = require('express');


//===========================CUSTOM MODULE
let ErrorClass    = require('./../backend/ErrorClass'),
    dbCon         = require('./../backend/dbConnections'),
    Presenters          = require('./../backend/Presenters');


    // ================================Class def
let errClass  = new ErrorClass(dbCon.mysqlConnect),
    presentersInstant  = new Presenters(dbCon.mysqlConnect, errClass);

// ===========================INIT
router = express.Router();


// ===========================All news
// ===========================All news
router.get('/presenters', (req, res, next)=>{
    presentersInstant.getAllPresenters((data)=>{
      res.json(data)
       });
});

// ===========================ONE news
router.get('/presenters/:id', (req, res, next)=>{
    presentersInstant.getChoosenPresenter(req.params.id,(data)=>{
      res.json(data)
       });
});

// ===========================DELETE ONE news
router.get('/presenters/:id', (req, res, next)=>{
    presentersInstant.deletePresenter(req.params.id,(data)=>{
      res.json(data)
       });
});

// ===========================ADD ONE news
router.post('/presenters/', (req, res, next)=>{
    presentersInstant.addPresenter(req.body,(data)=>{
      res.json(data)
       });
});

// ===========================UPDATE ONE news
router.put('/presenters/:id', (req, res, next)=>{
    presentersInstant.updatePresenter(req.params.id,(data)=>{
      res.json(data)
       });
});

module.exports = router;
