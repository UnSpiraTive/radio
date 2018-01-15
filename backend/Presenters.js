class Presenters {

  constructor(dbConnections, errClass) {
    this.dbCon = dbConnections;
    this.errClass  = errClass;

  }

getAllPresenters(callback){
  this.dbCon.getConnection((er,tempCon)=>{
    (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("SELECT * FROM prezenterzy ORDER BY p_count DESC", (er, rows, fields)=>{
        (er) ? this.errClass.mysqlError(er, tempCon) : (
          tempCon.release(),
          callback(rows)
        )
      });
    });
  }



sameDayPlay(callback){
  let sql = "SELECT * FROM day";
  this.dbCon.getConnection((er, tempCon)=>{
    (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query(sql, (er, rows, fields)=>{
      (er) ? this.errClass.mysqlError(er, tempCon) : (
        tempCon.release(),
        callback(rows)
      )
    });
  });

}

ramowka(callback){
  this.dbCon.getConnection((er, tempCon)=>{
    (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("SELECT * From ramowka", (er, rows, fields)=>{
      (er) ? this.errClass.mysqlError(er, tempCon) : (
        tempCon.release(),
        callback(rows)
      )
    });
  });
}

getPropositionId(idProp, requestIp, callback){
  this.id = idProp;
  this.requestIp = requestIp;
  this.dbCon.getConnection((er, tempCon) => {
            (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("SELECT COUNT(*) as howMany FROM propozycja_ip WHERE ip_p_id = ? AND ip_ip = ?", [this.id, this.requestIp] , (er, rows, fields) => {
              (er) ? this.errClass.mysqlError(er,tempCon) : (
            tempCon.release(),
            callback(rows)
          )
        });
    });
  }

  insertPropositionId(idProp, requestIp, callback){
    this.idProp = idProp;
    this.requestIp = requestIp;
    this.dbCon.getConnection((er, tempCon) => {
              (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("INSERT INTO propozycja_ip (ip_p_id, ip_ip) VALUES (?, ?)", [this.idProp, this.requestIp] , (er, res) => {
                (er) ? this.errClass.mysqlError(er,tempCon) : (
              tempCon.release(),
              callback(res)
            )
          });
      });
    }


    getPresenterId(idProp, requestIp, callback){
      this.id = idProp;
      this.requestIp = requestIp;
      this.dbCon.getConnection((er, tempCon) => {
                (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("SELECT COUNT(*) as howMany FROM prezenterzy_voice WHERE v_p_id = ? AND v_ip = ?", [this.id, this.requestIp] , (er, rows, fields) => {
                  (er) ? this.errClass.mysqlError(er,tempCon) : (
                tempCon.release(),
                callback(rows)
              )
            });
        });
      }

      insertPresenterId(idProp, requestIp, callback){
        this.idProp = idProp;
        this.requestIp = requestIp;
        this.dbCon.getConnection((er, tempCon) => {
                  (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("INSERT INTO prezenterzy_voice (v_p_id, v_ip) VALUES (?, ?)", [this.idProp, this.requestIp] , (er, res) => {
                    (er) ? this.errClass.mysqlError(er,tempCon) : (
                  tempCon.release(),
                  callback(res)
                )
              });
          });
        }


      updatePresenterVoice(id, count, callback){
          this.idPres = id;
          this.count = count;
          this.dbCon.getConnection((er,tempCon)=>{
            (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("UPDATE prezenterzy SET p_count = ? WHERE p_id = ?", [this.count, this.idPres],(er,result) =>{
                (er) ? this.errClass.mysqlError(er, tempCon) : (
                  tempCon.release(),
                  callback(result)
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
              (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("INSERT INTO prezenterzy (p_avatar, p_name, p_count) VALUES (?,?,?)",[this.dataTab[1],this.dataTab[0],0], (er,result) =>{
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
      (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("DELETE FROM prezenterzy WHERE p_id = ?",[this.presenter_id], (er, result) => {
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
        (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("UPDATE prezenterzy SET p_avatar = ?, p_name = ?, p_count = ? WHERE p_id = ?" [this.tabOfData[1], this.tabOfData[2], this.tabOfData[3], this.tabOfData[0]],(er,result) =>{
            (er) ? this.errClass.mysqlError(er, tempCon) : (
              tempCon.release(),
              callback(result)
            )
         });
      });
    }




}



module.exports = Presenters;
