//npm i @types/socket.io-client --save-dev
import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { AuthService } from '../../services/auth.service';
import * as io from 'socket.io-client';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [SocketService]
})

export class ChatComponent implements OnInit {
  messageText: string;
  username: string;
  messages: Array<any>;
  avatar: string = '../../img/avatar.jpg';
  selfAuthored: boolean = false;

  constructor(private _socketService: SocketService, private _AuthService:AuthService) {
      this._socketService.emit('getMSG', (msg: any)=>{
      });


   }

  ngOnInit() {
    this.messages = new Array();
    this._socketService.on('update-chat-view', (msg: any) => {
      this.messages.pop();
      this.messages.push(msg);
      // console.log(msg);
      // console.log(this.messages);
    });

    // this._socketService.on('message-received', (msg: any) => {
    //   this.messages.push(msg);
    // });
  }

  sendMessage() {
    const message = {
      text: this.messageText,
      username: this.username,
      date: Date.now()
    };
    this._socketService.emit('send-message', message);
    this.messageText = '';
  }

removeMSG(id){
  this._socketService.emit('remove-msg', id);
  console.log(id);
}


}
