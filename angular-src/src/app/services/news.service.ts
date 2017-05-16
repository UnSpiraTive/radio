import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfiguereService } from './configure.service';


@Injectable()
export class NewsService {
  conf: ConfiguereService;

  constructor(private http:Http) {
    this.conf = new ConfiguereService();

    console.log(this.conf.apiHost);
   }

   getNews(){
     return this.http.get(this.conf.apiHost+'news')
     .map(res => res.json());
   }

}
