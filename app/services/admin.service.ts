import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfiguereService } from './configure.service';



@Injectable()
export class AdminService {
  conf: ConfiguereService;

  constructor(
    private http:Http,
  ) {
    this.conf = new ConfiguereService();
  }

addPresenter(imie, link){
  if(link ==''){link="zenek"}
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(this.conf.apiHost+"/presenters", [imie,link], {headers: headers})
    .map(res => res.json());

}

deletePresenter(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.delete(this.conf.apiHost+"/presenters", {headers: headers, body: {id}})
    .map(res => res.json());
}
}
