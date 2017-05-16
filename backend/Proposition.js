class Proposition {
  constructor(dbConnections, errClass) {
    this.dbCon = dbConnections;
    this.errClass = errClass;
  }

getAllProposition(callback, accept = 1){
  this.accept = accept;
  this.dbCon.getConnection((er,tempCon)=>{
    (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("SELECT * FROM propozycja WHERE s_accept = ? ORDER BY s_count DESC", [this.accept], (er, raws, fields)=>{
      (er) ? this.errClass.mysqlError(er, tempCon) : (
        tempCon.release(),
        callback(raws)
      )
    });
  });
}

getChoosenProposition(id, accept = 0, callback){
  this.id = id;
  this.accept = accept;
  this.dbCon.getConnection((er,tempCon)=>{
    (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("SELECT * FROM propozycja WHERE s_id = ? AND s_accept = ?", [this.id, this.accept], (er,raws,fields)=>{
      (er) ? this.errClass.mysqlError(er, tempCon) : (
        tempCon.release(),
        callback(raws)
      )
    });
  });
}
// t[0] -> s_id | t[1] -> s_title | t[2] -> s_author | t[x] -> s_count (default = 0) | t[3] -> s_link | t[x] -> s_accept (default =0)
addProposition(tabOfPropositionData, callback){
  this.dataTab = tabOfPropositionData;
  this.dbCon.getConnection((er, tempCon)=>{
    (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("INSERT INTO propozycja (s_title,s_author,s_link) VALUES (?,?,?)",[this.dataTab[1], this.dataTab[2]. this.dataTab[3]],(er,result)=>{
      (er) ? this.errClass.mysqlError(er, tempCon) : (
        tempCon.release(),
        callback(result)
      )
    });
  });
}

deleteProposition(id, callback){
  this.presenter_id = id;
  this.dbCon.getConnection((er,tempCon)=>{
    (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("DELET FROM propozycja WHERE = ? ",[this.presenter_id], (er, result) => {
      (er) ? this.errClass.mysqlError(er, tempCon) : (
        tempCon.release(),
        callback(result)
      )
    });
  });
}

acceptProposition(id, callback){
  this.presenter_id = id;
  this.dbCon.getConnection((er,tempCon)=>{
    (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("UPDATE propozycja SET s_accept = 1 WHERE = ? ",[this.presenter_id], (er, result) => {
      (er) ? this.errClass.mysqlError(er, tempCon) : (
        tempCon.release(),
        callback(result)
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


  updatePropositionVoice(id, count, callback){
      this.idPres = id;
      this.count = count;
      this.dbCon.getConnection((er,tempCon)=>{
        (er) ? this.errClass.mysqlError(er, tempCon) : tempCon.query("UPDATE propozycja SET s_count = ? WHERE s_id = ?", [this.count, this.idPres],(er,result) =>{
            (er) ? this.errClass.mysqlError(er, tempCon) : (
              tempCon.release(),
              callback(result)
            )
         });
      });
    }

    getChoosenProposition(id, callback){
      this.id = id;
      this.dbCon.getConnection((er, tempCon) => {
        (er) ? this.errClass.mysqlError(er,tempCon) : tempCon.query("SELECT * FROM propozycja WHERE s_id = " + this.dbCon.escape(this.id) , (er, rows, fields) => {
              (er) ? this.errClass.mysqlError(er,tempCon) : (
                tempCon.release(),
                callback(rows)
              )
            });
        });
      }



}

module.exports = Proposition;
