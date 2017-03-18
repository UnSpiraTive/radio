let dbCon         = require('./dbConnections');

class News {

  constructor(dbConnections) {
    this.dbCon = dbConnections;
  }

  getAllNews(callback){
    this.dbCon.getConnection((er, tempCon) => {
      if(er){
        tempCon.release();
        return -1;
      }else{
        tempCon.query("SELECT * FROM news", (er, rows, fields) => {
            if(er){
              tempCon.release();
              return -1;
            }else {
              tempCon.release();
              return callback((rows));
            }
        });
      }
  });

  }

  getChoosenNews(id, callback){
    this.id = id;

    this.dbCon.getConnection((er, tempCon) => {
      if(er){
        tempCon.release();
        return -1;
      }else{
        tempCon.query("SELECT * FROM news WHERE n_id = " + this.id , (er, rows, fields) => {
            if(er){
              tempCon.release();
              return -1;
            }else {
              tempCon.release();
              return callback(rows);
            }
        });
      }
    });
  }
}




// =======================Module exports
module.exports = News;
