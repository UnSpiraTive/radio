import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
=======
>>>>>>> refs/remotes/origin/master

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

<<<<<<< HEAD
  constructor(
    private _AuthService: AuthService,
    private router:Router
  ) { }

  onLogoutClick(){
  this._AuthService.logout();
  this.router.navigate(['/login']);
  return false;
}
=======
  constructor() { }
>>>>>>> refs/remotes/origin/master

  ngOnInit() {
  }

}
