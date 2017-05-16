//===========================IMPORT MODULE
let express = require('express'),
    crypto   = require('crypto'),
    jwt     = require('jsonwebtoken'),
    passport = require('passport');
    const User  = require('./models/user');

//===========================CUSTOM MODULE
let ErrorClass    = require('./../backend/ErrorClass'),
    dbCon         = require('./../backend/dbConnections');

// ================================Class def
let errClass  = new ErrorClass(dbCon.mysqlConnect);

// ===========================INIT
const router = express.Router();

// ===========================Login
router.post('/login',(req, res, next)=>{
      const username = req.body.username;
      const password = crypto.createHash('md5').update(req.body.password).digest("hex");

      User.findOne({ 'username':  username }, (err, user) => {

      if(err) throw err;

      if(!user){
        return res.json({success: false, msg: "User not found"});
      }

      if(password == user.password){
        const token = jwt.sign(user, "pas123", {
          expiresIn: 86400 // 24h
        });
        return res.json({success: true,
                  token: "JWT " + token,
                  user: {
                    id: user._id,
                    username: user.username
                  },
                  msg: "loged in - go admin"});
      }else{
        return res.json({success: false, msg: "Wrong user password"});
      }

    });

});

router.get('/admin', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
