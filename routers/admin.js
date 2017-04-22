//===========================IMPORT MODULE
let express = require('express'),
    passport = require('passport');


//===========================CUSTOM MODULE
let ErrorClass    = require('./../backend/ErrorClass'),
    dbCon         = require('./../backend/dbConnections');

// ================================Class def
let errClass  = new ErrorClass(dbCon.mysqlConnect);

// ===========================INIT
router = express.Router();


// ===========================All news
router.get('/admin', isLoggedIn ,(req, res, next)=>{
      res.json({"admin": "PANEL"})
});

router.get('/logout', isLoggedIn ,(req, res, next)=>{
      req.logout();
      res.redirect('/api/login');
});

// route middleware to make sure
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/api/login');
}


module.exports = router;
