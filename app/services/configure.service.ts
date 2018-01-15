import { Injectable } from '@angular/core';

@Injectable()
export class ConfiguereService {
  host: String;
  apiHost: String;

  constructor() {
    this.host = 'http://localhost:8080';
    this.apiHost = 'http://localhost:8080/api/';
   }

}
