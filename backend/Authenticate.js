class Authenticate {

  constructor(dbConnections, errClass, crypto) {
    this.dbCon = dbConnections;
    this.errClass  = errClass;
    this.crypto = crypto;

  }


  getUser(name, pass, callback){
    this.name = name;
    this.pass = this.crypto.createHash('md5').update(pass).digest("hex");

    this.dbCon.getConnection((er, tempCon) => {
      (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("SELECT * FROM user WHERE u_name = ? ",  [this.name] , (er, rows, fields) => {
            (er) ? this.errClass.mysqlError(er,tempCon) : (
              tempCon.release(),
              (rows.length < 1) ? callback(JSON.stringify({message: "User dosen't exist"})) : (
                (rows[0].u_password != this.pass) ? callback(JSON.stringify({message: "Wrong password"})) : (
                  callback(this.pass)
                )
              )
            )
          });
      });
    }


}


module.exports = Authenticate;
