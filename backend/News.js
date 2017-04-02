class News {

  constructor(dbConnections, errClass) {
    this.dbCon = dbConnections;
    this.errClass  = errClass;

  }


getAllNews(callback){
    this.dbCon.getConnection((er, tempCon) => {
      (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("SELECT * FROM news ORDER BY n_id DESC", (er, rows, fields) => {
           (er) ? this.errClass.mysqlError(er, tempCon) : (
             tempCon.release(),
             callback(rows)
          )
        });
      });
    }

  getChoosenNews(id, callback){
    this.id = id;
    this.dbCon.getConnection((er, tempCon) => {
      (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("SELECT * FROM news WHERE n_id = " + this.dbCon.escape(this.id) , (er, rows, fields) => {
            (er) ? this.errClass.mysqlError(er,tempCon) : (
              tempCon.release(),
              callback(rows)
            )
          });
      });
    }

  // getAllNews(callback){
  //   this.dbCon.getConnection((er, tempCon) => {
  //     if(er){
  //       tempCon.release();
  //       return -1;
  //     }else{
  //       tempCon.query("SELECT * FROM newsa ORDER BY n_id DESC", (er, rows, fields) => {
  //           if(er){
  //             tempCon.release();
  //             return -1;
  //           }else {
  //             tempCon.release();
  //             return callback(rows);
  //           }
  //       });
  //     }
  // });
  // }

  // getChoosenNews(id, callback){
  //   this.id = id;
  //
  //   this.dbCon.getConnection((er, tempCon) => {
  //     if(er){
  //       tempCon.release();
  //       return -1;
  //     }else{
  //       tempCon.query("SELECT * FROM news WHERE n_id = " + this.dbCon.escape(this.id) , (er, rows, fields) => {
  //           if(er){
  //             tempCon.release();
  //             return -1;
  //           }else {
  //             tempCon.release();
  //             return callback(rows);
  //           }
  //       });
  //     }
  //   });
  // }

  addNews(newsText, callback){
    this.newsText = newsText;
    this.dbCon.getConnection((er, tempCon)=>{
        (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("INSERT INTO news (n_tresc) VALUES (" + this.dbCon.escape(this.newsText) + ")", (er,result) =>{
            (er) ? this.errClass.mysqlError(er, tempCon) : (
              tempCon.release(),
              callback(result)
            )
        });
    });
  }


  // tab[0] -> id tab[1] -> tresc
  updateNews(tabOfData, callback){
    this.tabOfData = tabOfData;
    this.dbCon.getConnection((er,tempCon)=>{
      (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("UPDATE news SET n_tresc = " + this.dbCon.escape(this.tabOfData[1]) + "WHERE n_id = " + this.dbCon.escape(this.tabOfData[0]),(er,result) =>{
          (er) ? this.errClass.mysqlError(er, tempCon) : (
            tempCon.release(),
            callback(result)
          )
       });
    });
  }


deleteNews(id, callback){
  this.news_id = id;
  this.dbCon.getConnection((er,tempCon)=>{
    (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("DELET FROM news WHERE = " + this.dbCon.escape(this.news_id), (er, result) => {
      (er) ? this.errClass.mysqlError(er, tempCon) : (
        tempCon.release(),
        callback(result)
      )
    });
  });
 }

}

// =======================Module exports
module.exports = News;
