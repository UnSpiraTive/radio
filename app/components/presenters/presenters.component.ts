import { Component, OnInit } from '@angular/core';
import { PresentersService } from '../../services/presenters.service';
@Component({
  selector: 'app-presenters',
  templateUrl: './presenters.component.html',
  styleUrls: ['./presenters.component.css'],
  providers: [PresentersService]
})
export class PresentersComponent implements OnInit {
  Fpresenters: Array<String>;
  Framowka: Array<String>;
  Fday: Array<String>;
  tlo: String;
  display: String;
  response: String;
  border:String;

  constructor(private _presentersService: PresentersService) {
    this.display = "none";


    this._presentersService.getAllPresenters()
    .subscribe(presenters => {
      this.Fpresenters=presenters[0];
      this.Framowka=presenters[1];
      this.Fday=presenters[2];
    })
   }

  ngOnInit() {
  }


  likeUp(id){
    this._presentersService.likeUpCheck(id).subscribe((res) => {
        if(res.success == true){
          this.Fpresenters = res.newPresenter;
          this.response = res.msg;
          this.display = "block"
          this.tlo = "green";
          this.border="1px solid green";
        }else{
          this.response = res.msg;
          this.display = "block"
          this.tlo = "red";
          this.border="1px solid red";
        }
        setTimeout(()=>{
          this.display = "none";
         }, 3000);

    });
  }

  likeDown(id){
    this._presentersService.likeDownCheck(id).subscribe((res) => {
        if(res.success == true){
          this.Fpresenters = res.newPresenter;
          this.response = res.msg;
          this.display = "block"
          this.tlo = "green";
          this.border="1px solid green";
        }else{
          this.response = res.msg;
          this.display = "block"
          this.tlo = "red";
          this.border="1px solid red";
        }
        setTimeout(()=>{
          this.display = "none";
         }, 3000);

    });
  }

}
