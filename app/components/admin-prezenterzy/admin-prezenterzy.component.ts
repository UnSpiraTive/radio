import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { PresentersService } from '../../services/presenters.service';



@Component({
  selector: 'app-admin-prezenterzy',
  templateUrl: './admin-prezenterzy.component.html',
  styleUrls: ['./admin-prezenterzy.component.css'],
  providers: [AdminService, PresentersService]

})
export class AdminPrezenterzyComponent implements OnInit {
namePrezenter: String;
avatarPrezenter: String;
Fpresenters: String;
  constructor(private _AdminService: AdminService, private _presentersService: PresentersService) {
    this._presentersService.getAllPresenters()
    .subscribe(presenters => {
      this.Fpresenters=presenters[0];
    })
  }

  DodajPrezentera(){
    this._AdminService.addPresenter(this.namePrezenter, this.avatarPrezenter)
      .subscribe(presenter => {
      });
  }

  usunPrezentera(id){
    this._AdminService.deletePresenter(id)
      .subscribe(presenter => {
      });
  }

  ngOnInit() {
  }

}
