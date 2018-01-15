import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;


  constructor(
    private _AuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this._AuthService.authenticate(user).subscribe(data => {
      if(data.success){
        this._AuthService.storeUserData(data.token, data.user);
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

}
