import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { ConfiguereService } from './configure.service';

@Injectable()
export class PropositionService {
  conf: ConfiguereService;
  id:Number;
  znak:Number;

  constructor(private http:Http) {
    this.conf = new ConfiguereService();


  }

  getAllProposition(){
    return this.http.get(this.conf.apiHost+"propos")
    .map(res => res.json());
  }

  likeUpProposition(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.id=id;
    this.znak=1;
    const data={
      "id":this.id,
      "znak":this.znak
    };
    return this.http.post(this.conf.apiHost+"propos/id", data, {headers: headers})
      .map(res => res.json());

  }

}
