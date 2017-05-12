import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {PropositionService} from '../../services/proposition.service';
import { SafeUrlPipe } from '../../services/safe-url.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css'],
  providers: [PropositionService, SafeUrlPipe]
})
export class PropositionComponent implements OnInit {
  propos: Array<String>;
  displayValue: String;

  constructor(private _propositionService: PropositionService, public safeUrl: SafeUrlPipe) {
      this.displayValue = "none";
      this._propositionService.getAllProposition()
        .subscribe(propos => {
          this.propos = propos;
        });

   }

   video(value){
     let id = "video"+value;
     let disp =  (<HTMLInputElement>document.getElementById(id)).style.display;

     if(disp== 'none' || disp == '')
		   disp = 'block';
	   else
		   disp = 'none';

    (<HTMLInputElement>document.getElementById(id)).style.display = disp;
   }







  ngOnInit() {}

}
