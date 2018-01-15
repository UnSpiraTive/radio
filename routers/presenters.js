//===========================IMPORT MODULE
let express = require('express'),
    mac     = require('getmac');


//===========================CUSTOM MODULE
let ErrorClass    = require('./../backend/ErrorClass'),
    dbCon         = require('./../backend/dbConnections'),
    Presenters          = require('./../backend/Presenters');


    // ================================Class def
let errClass  = new ErrorClass(dbCon.mysqlConnect),
    presentersInstant  = new Presenters(dbCon.mysqlConnect, errClass);

// ===========================INIT
router = express.Router();


// ===========================All
router.get('/presenters', (req, res, next)=>{
    presentersInstant.getAllPresenters((presenters)=>{
      presentersInstant.ramowka((ramowka)=>{
        presentersInstant.sameDayPlay((weekDay)=>{
          let data = [presenters, ramowka, weekDay]
          res.json((data))
        });
      })
       });
});

// ===========================ONE
router.get('/presenters/:id', (req, res, next)=>{
    presentersInstant.getChoosenPresenter(req.params.id,(data)=>{
      res.json(data)
       });
});

// ===========================DELETE ONE
router.delete('/presenters/', (req, res, next)=>{
    presentersInstant.deletePresenter(req.body.id,(data)=>{
      res.json(data)
       });
});

// ===========================ADD ONE
router.post('/presenters/', (req, res, next)=>{
    presentersInstant.addPresenter(req.body,(data)=>{
      res.json(data)
       });
});

// ===========================UPDATE ONE
router.put('/presenters/:id', (req, res, next)=>{
    presentersInstant.updatePresenter(req.params.id,(data)=>{
      res.json(data);
       });
});

router.post('/presenters/:like', (req, res, next)=>{
  this.znak = parseInt(req.body.znak);
  this.id = parseInt(req.body.id);
  mac.getMac((er, macAdd)=>{
    if (er) throw er;
  presentersInstant.getPresenterId(this.id, macAdd, (data)=>{
      if(data[0].howMany < 1 ){
            presentersInstant.insertPresenterId(this.id, macAdd,(result)=>{
              presentersInstant.getChoosenPresenter(this.id, (presenterPCount)=>{
                presentersInstant.updatePresenterVoice(this.id, (presenterPCount[0].p_count + (this.znak)), (resultUpdate)=>{
                  presentersInstant.getAllPresenters((newPresenter)=>{
                    res.json({"success": true, "msg": "Glos został oddany", "idProp": this.id, "ipProp": macAdd, newPresenter: newPresenter });
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
