class Presenters {
  constructor(dbConnections) {
    this.dbCon = dbConnections;
  }

getAllPresenters(callback){
  this.dbCon.getConnection((er,tempCon)=>{
    if(er){
      tempCon.release();
      return -1;
    }else{
      tempCon.query("SELECT * FROM prezenterzy", (er, rows, fields)=>{
        if(er){
          tempCon.release();
          return -1;
        }else{
          tempCon.release();
          return callback(rows);
        }
      });
    }
  });
}



}



module.exports = Presenters;
