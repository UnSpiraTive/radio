class Presenters {

  constructor(dbConnections, errClass) {
    this.dbCon = dbConnections;
    this.errClass  = errClass;

  }

getAllPresenters(callback){
  this.dbCon.getConnection((er,tempCon)=>{
    (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("SELECT * FROM prezenterzy", (er, rows, fields)=>{
        (er) ? this.errClass.mysqlError(er, tempCon) : (
          tempCon.release(),
          callback(rows)
        )
      });
    });
  }

getChoosenPresenter(id, callback){
  this.id = id;
  this.dbCon.getConnection((er, tempCon) => {
    (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("SELECT * FROM prezenterzy WHERE p_id = " + this.dbCon.escape(this.id) , (er, rows, fields) => {
          (er) ? this.errClass.mysqlError(er,tempCon) : (
            tempCon.release(),
            callback(rows)
          )
        });
    });
  }

// t[0] -> p_id | t[1] -> p_avater | t[2] -> p_name | t[3] -> p_count
addPresenter(tabOfPresenterData, callback){
    this.dataTab = tabOfPresenterData;
    // this.dataTab = [0, 'jakis', 'roloslaw', 2]; //test Data
    this.dbCon.getConnection((er, tempCon)=>{
              (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("INSERT INTO prezenterzy (p_avatar, p_name, p_count) VALUES (?,?,?)",[this.dataTab[1],this.dataTab[2],this.dataTab[3]], (er,result) =>{
              (er) ? this.errClass.mysqlError(er, tempCon) : (
              tempCon.release(),
              callback(result)
            )
        });
    });
  }

  deletePresenter(id, callback){
    this.presenter_id = id;
    this.dbCon.getConnection((er,tempCon)=>{
      (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("DELET FROM prezenterzy WHERE = " + this.dbCon.escape(this.presenter_id), (er, result) => {
        (er) ? this.errClass.mysqlError(er, tempCon) : (
          tempCon.release(),
          callback(result)
        )
      });
    });
  }
// t[0] -> p_id | t[1] -> p_avater | t[2] -> p_name | t[3] -> p_count
    updatePresenter(tabOfData, callback){
      this.tabOfData = tabOfData;
      this.dbCon.getConnection((er,tempCon)=>{
        (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("UPDATE news SET p_avatar = ?, p_name = ?, p_count = ? WHERE p_id = ?" [this.tabOfData[1], this.tabOfData[2], this.tabOfData[3], this.tabOfData[0]],(er,result) =>{
            (er) ? this.errClass.mysqlError(er, tempCon) : (
              tempCon.release(),
              callback(result)
            )
         });
      });
    }

}



module.exports = Presenters;
