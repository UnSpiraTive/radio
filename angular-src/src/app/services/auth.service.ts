import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ConfiguereService} from './configure.service';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  conf: ConfiguereService;

  constructor(
    private http:Http,
  ) {
    this.conf = new ConfiguereService();
  }


authenticate(user){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(this.conf.host+"/login", user, {headers: headers})
    .map(res => res.json());
}

getAdminPanel(){
  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(this.conf.host+"/admin",{headers: headers})
      .map(res => res.json());
}



storeUserData(token, user){
  localStorage.setItem('id_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken = token;
  this.user = user;
}

loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

logedIn(){
  return tokenNotExpired('id_token');
}

logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}


}
