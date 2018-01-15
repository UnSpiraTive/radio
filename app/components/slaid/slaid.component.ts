import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {SlaidshowService } from '../../services/slaidshow.service';

@Component({
  selector: 'slaid',
  templateUrl: './slaid.component.html',
  styleUrls: ['./slaid.component.css'],
  providers: [SlaidshowService]
})


export class SlaidComponent implements OnInit {
  innerWidth: any;
  innerHeight: any;
  displayValue: String;
  item: Array<String>;
  subscription:Subscription;
  songs: String;


  constructor(public _slaidshowService: SlaidshowService) {
    this.songs = "vwCWwZetRaI";
    this._slaidshowService.event.subscribe((data)=>{
      console.log(data);
    });

    // this._slaidshowService.changeDisplayValue("block");
    this.innerWidth = this._slaidshowService.getResolution()[0];
    this.innerHeight = this._slaidshowService.getResolution()[1];
    this.displayValue = this._slaidshowService.getResolution()[2];

  }

slaidClose(){
(<HTMLInputElement>document.getElementById('slaid')).style.display = "none";
}


    ngOnInit() { }


}
