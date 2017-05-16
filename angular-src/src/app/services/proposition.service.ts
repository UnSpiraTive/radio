import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { ConfiguereService } from './configure.service';

@Injectable()
export class PropositionService {
  conf: ConfiguereService;

  constructor(private http:Http) {
    this.conf = new ConfiguereService();


  }

  getAllProposition(){
    return this.http.get(this.conf.apiHost+"propos")
    .map(res => res.json());
  }


}
