class ErrorClass {

  constructor(dbConnections) {
    this.dbCon = dbConnections;
  }

  mysqlError(info, tempCon){
    this.info = info;
    tempCon.release();
    console.log('Blad' + info);
    return info;
  }


}




module.exports = ErrorClass;
