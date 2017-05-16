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



router.post('/propos/:id', (req, res, next)=>{
  mac.getMac((er, macAdd)=>{
    if (er) throw er;
  presentersInstant.getPropositionId(req.params.id, macAdd, (data)=>{
    console.log(this.znak);
      if(data[0].howMany < 1 ){
            presentersInstant.insertPropositionId(req.params.id, macAdd,(result)=>{
              presentersInstant.getChoosenProposition(req.params.id, (presenterPCount)=>{
                presentersInstant.updatePropositionVoice(req.params.id, (presenterPCount[0].p_count + 1), (resultUpdate)=>{
                  res.json({"success": true, "msg": "Glos został oddany", "idProp": req.params.id, "ipProp": macAdd });
                });
              });
            });
      }else{
        res.json({"success": false, "msg": "Glos z tego IP został już oddany", "idProp": req.params.id, "ipProp": macAdd });
      }
    });
  });
});






module.exports = router;
