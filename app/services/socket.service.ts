//npm i @types/socket.io-client --save-dev
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {ConfiguereService} from './configure.service';

@Injectable()
export class SocketService {
  socket: SocketIOClient.Socket;
  conf: ConfiguereService;

  constructor() {
    this.conf = new ConfiguereService();
    this.socket = io.connect(this.conf.host);
  }

  on(eventName: any, callback: any) {
      if (this.socket) {
        this.socket.on(eventName, function(data: any) {
          callback(data);
        });
      }
    };

  emit(eventName: any, data: any) {
      if (this.socket) {
        this.socket.emit(eventName, data);
      }
    };

  removeListener(eventName: any) {
      if (this.socket) {
        this.socket.removeListener(eventName);
      }
    };

}
