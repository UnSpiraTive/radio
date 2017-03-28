class getNews {

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
        tempCon.query("SELECT * FROM news WHERE n_id = " + this.dbCon.escape(this.id) , (er, rows, fields) => {
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

  addNews(tabOfData, callback){
    this.tab = tabOfData;
      this.dbCon.getConnection((er, tempCon)=>{
        if(er){
          tempCon.release();
          return -1;
        }else {
          tempCon.query("INSERT INTO news (" + this.dbCon.escape(this.tab[1]) + ")", (er,row, fields) =>{
            
          })
        }
      });
  }
}

// =======================Module exports
module.exports = getNews;
