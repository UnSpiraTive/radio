//===========================IMPORT MODULE
let express = require('express');


//===========================CUSTOM MODULE
let ErrorClass    = require('./../backend/ErrorClass'),
    dbCon         = require('./../backend/dbConnections'),
    News          = require('./../backend/News');


// ================================Class def
let errClass  = new ErrorClass(dbCon.mysqlConnect),
    newsInstant = new News(dbCon.mysqlConnect, errClass);

// ===========================INIT
router = express.Router();


// ===========================All news
router.get('/news', (req, res, next)=>{
    newsInstant.getAllNews((data)=>{
      res.json(data)
       });
});

// ===========================ONE news
router.get('/news/:id', (req, res, next)=>{
    newsInstant.getChoosenNews(req.params.id,(data)=>{
      res.json(data)
       });
});

// ===========================DELETE ONE news
router.get('/news/:id', (req, res, next)=>{
    newsInstant.deleteNews(req.params.id,(data)=>{
      res.json(data)
       });
});

// ===========================ADD ONE news
router.post('/news/', (req, res, next)=>{
    newsInstant.addNews(req.body,(data)=>{
      res.json(data)
       });
});

// ===========================UPDATE ONE news
router.put('/news/:id', (req, res, next)=>{
    newsInstant.updateNews(req.params.id,(data)=>{
      res.json(data)
       });
});



module.exports = router;
