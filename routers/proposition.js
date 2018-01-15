//===========================IMPORT MODULE
let express = require('express'),
  mac = require('getmac');

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
  this.id = parseInt(req.body.id);
  this.znak = parseInt(req.body.znak);
  mac.getMac((er, macAdd)=>{
    if (er) throw er;
  propositionInstant.getPropositionId(this.id, macAdd, (data)=>{
      if(data[0].howMany < 1 ){
            propositionInstant.insertPropositionId(this.id, macAdd,(result)=>{
              propositionInstant.getChoosenProposition(this.id, (presenterPCount)=>{
                propositionInstant.updatePropositionVoice(this.id, (presenterPCount[0].s_count + 1), (resultUpdate)=>{
                  propositionInstant.getAllProposition((newProposition)=>{
                    res.json({"success": true, "msg": "Glos został oddany", "idProp": this.id, "ipProp": macAdd, newProposition: newProposition });
                  });
                });
              });
            });
      }else{
        res.json({"success": false, "msg": "Glos z tego IP został już oddany", "idProp": this.id, "ipProp": macAdd });
      }
    });
  });
});






module.exports = router;
