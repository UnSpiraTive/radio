import { Component, OnInit} from '@angular/core';

import {SlaidshowService } from '../../services/slaidshow.service';


@Component({
  selector: 'slaidshow',
  templateUrl: './slaidshow.component.html',
  styleUrls: ['./slaidshow.component.css'],
  providers: [SlaidshowService]
})

export class SlaidshowComponent implements OnInit {
  propos: Array<String>;
  currentSong: Number;
  songUrl:  String;
  innerWidth: any;
  innerHeight: any;
  innerWidthPlayer: any;
  innerHeightPlayer: any;

  constructor(public _slaidshowService: SlaidshowService ) {
    this.currentSong = 0;
    this.innerWidth = this._slaidshowService.getResolution()[0];
    this.innerHeight = this._slaidshowService.getResolution()[1];
    this.innerWidthPlayer = this._slaidshowService.getResolution()[4];
    this.innerHeightPlayer = this._slaidshowService.getResolution()[3];

    this._slaidshowService.getPropos()
    .subscribe(propos => {
      this.propos = propos;
    });

    // _slaidshowService.changeDisplayValue("block");
   }

   clickClient(id){
     if(id < 0){
       this.currentSong = this.propos.length-1;
     }else if(id > this.propos.length-1){
       this.currentSong = 0;
     }else{
       this.currentSong = id;
     }
   }


   slaidYT(song){
     this.songUrl = song;
     let elementBefore = (<HTMLInputElement>document.getElementById('container'))
     let slaid = (<HTMLInputElement>document.getElementById('slaid'));
     let containerBody = (<HTMLInputElement>document.getElementById('containerBody'));
     let player = (<HTMLInputElement>document.getElementById('player'));
     (<HTMLInputElement>player).style.width = this.innerWidthPlayer;
     (<HTMLInputElement>player).style.height = this.innerHeightPlayer;



     let elementKlon = slaid;
		 let klon = elementKlon.cloneNode(true);

         let hostElem = elementBefore;
        //  console.log(hostElem.children);
        //  console.log(hostElem.parentNode);
        //  console.log((<HTMLInputElement>document.getElementsByTagName('app-root')));


		if(!(<HTMLInputElement>document.getElementById('klon')))
		    (<HTMLInputElement>hostElem.parentNode.insertBefore(klon, elementBefore));

        (<HTMLInputElement>klon).style.display = "block";

        (<HTMLInputElement>klon).onclick = () => {
          (<HTMLInputElement>klon).style.display = "none";
          (<HTMLInputElement>hostElem).parentNode.removeChild(klon);
        }

   }

  slaidClose(){
   (<HTMLInputElement>document.getElementById('slaid')).style.display = "none";
   }

  ngOnInit() {
  }

}
