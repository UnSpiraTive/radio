import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfiguereService } from './configure.service';

@Injectable()
export class PresentersService {
  conf: ConfiguereService;
  id: Number;
  znak: Number;

  constructor(private http:Http) {
    this.conf = new ConfiguereService();


  }

  getAllPresenters(){
    return this.http.get(this.conf.apiHost+"presenters")
    .map(res => res.json());
  }

  likeUpCheck(id){
    //req.params.id
    //req.body.znak dla likeUo +1
    //req.body.znak dla likeDown -1
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.id = id;
    this.znak = 1;

    console.log(" id: " + this.id);
    console.log(this.conf.apiHost+"presenters/yes");

    const data = {
      "id": this.id,
      "znak": this.znak
    };

    return this.http.post(this.conf.apiHost+"presenters/yes", data, {headers: headers})
      .map(res => res.json());

  }


}
