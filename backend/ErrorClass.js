class ErrorClass {

  constructor(dbConnections) {
    this.dbCon = dbConnections;
  }

  mysqlError(info, tempCon){
    this.info = info;
    tempCon.release();
    console.log('Blad' + info);
    return -1;
  }


}




module.exports = ErrorClass;
