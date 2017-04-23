//npm i @types/socket.io-client --save-dev
import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
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
  messages: Array<any>;
  avatar: string = '../../img/avatar.jpg';
  selfAuthored: boolean = false;

  constructor(private _socketService: SocketService) { }

  ngOnInit() {
    this.messages = new Array();

    this._socketService.on('message-received', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
      console.log(this.messages);
    });
  }

  sendMessage() {
    const message = {
      text: this.messageText,
      date: Date.now(),
      imageUrl: this.avatar
    };
    this._socketService.emit('send-message', message);
    this.messageText = '';
  }

}
