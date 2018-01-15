import { Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject }    from 'rxjs/Subject';
import { ConfiguereService } from './configure.service';

@Injectable()
export class SlaidshowService {
  public _subject = new Subject<Array<String>>();
  public event = this._subject.asObservable();

  conf: ConfiguereService;
  ytLink: String;
  innerWidth: any;
  innerHeight: any;
  innerWidthPlayer: any;
  innerHeightPlayer: any;
  displayValue: String;


  constructor(private http:Http) {
    this.displayValue = "block";

    this.conf = new ConfiguereService();
    console.log(this.conf.apiHost);

  }

  getPropos(){
    return this.http.get(this.conf.apiHost+'propos')
      .map(res => res.json());
  }

  public getResolution(){
    this.innerHeight = (window.innerHeight) + "px"
    this.innerWidth = (window.innerWidth) + "px";
    this.innerHeightPlayer = (window.innerHeight-120) + "px"
    this.innerWidthPlayer = (window.innerWidth-120) + "px";

  return [this.innerWidth, this.innerHeight, this.displayValue, this.innerHeightPlayer, this.innerWidthPlayer];

}

public changeDisplayValue(displayValue){
  this.displayValue = displayValue;
  this._subject.next([this.innerWidth, this.innerHeight, this.displayValue ]);
}




}
