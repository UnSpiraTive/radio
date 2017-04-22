//===========================IMPORT MODULE
let express = require('express'),
    crypto     = require('crypto'),
    jwt     = require('jsonwebtoken'),
    passport     = require('passport'),
    mongoose   = require('mongoose'),
    userjs  = require('./models/user'),
    path = require('path');

let ErrorClass    = require('./../backend/ErrorClass'),
    dbCon         = require('./../backend/dbConnections');
// ================================Class def
let errClass  = new ErrorClass(dbCon.mysqlConnect);


router = express.Router();

module.exports = function(passport) {

// router.post('/signup', passport.authenticate('local-signup', {
//         successRedirect : '/', // redirect to the secure profile section
//         failureRedirect : '/login', // redirect back to the signup page if there is an error
//         failureFlash : true // allow flash messages
//     }));


/* Handle Login POST */
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/admin',
  failureRedirect: '/api/login',
  failureFlash : true
}));

router.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname + "/../public/view/login.html"));
});


}
