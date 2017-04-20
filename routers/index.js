//===========================IMPORT MODULE
let express = require('express'),
    path = require('path');



// ===========================INIT
router = express.Router();


router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + "/../public/index.html"));

    //MYSQL Query
    // newsInstant.getChoosenNews(3,(res)=>{
    //   console.log(res);
    // });

});


module.exports = router;
