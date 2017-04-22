//===========================IMPORT MODULE
let express = require('express');


//===========================CUSTOM MODULE
let ErrorClass    = require('./../backend/ErrorClass'),
    dbCon         = require('./../backend/dbConnections'),
    Proposition   = require('./../backend/Proposition');


    // ================================Class def
let errClass  = new ErrorClass(dbCon.mysqlConnect),
    propositionInstant  = new Proposition(dbCon.mysqlConnect, errClass);

// ===========================INIT
router = express.Router();



// ===========================All 
router.get('/propos', (req, res, next)=>{
    propositionInstant.getAllProposition((data)=>{
      res.json(data)
       });
});

// ===========================ONE
router.get('/propos/:id', (req, res, next)=>{
    propositionInstant.getChoosenProposition(req.params.id,1,(data)=>{
      res.json(data)
       });
});

// ===========================DELETE ONE
router.get('/propos/:id', (req, res, next)=>{
    propositionInstant.deleteProposition(req.params.id,(data)=>{
      res.json(data)
       });
});

// ===========================ADD ONE
router.post('/propos/', (req, res, next)=>{
    propositionInstant.addProposition(req.body,(data)=>{
      res.json(data)
       });
});

// ===========================UPDATE ONE
router.put('/propos/:id', (req, res, next)=>{
    propositionInstant.acceptProposition(req.params.id,(data)=>{
      res.json(data)
       });
});

module.exports = router;
