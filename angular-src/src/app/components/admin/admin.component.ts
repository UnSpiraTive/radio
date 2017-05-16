import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private _AuthService: AuthService,
    private router:Router
  ) { }

  onLogoutClick(){
  this._AuthService.logout();
  this.router.navigate(['/login']);
  return false;
}

  ngOnInit() {
  }

}
