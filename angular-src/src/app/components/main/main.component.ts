import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    news: String;


  constructor() {
    this.news = "News 1";
  }

  ngOnInit() {
  }

}
