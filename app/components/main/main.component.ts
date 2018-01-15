import { Component, OnInit } from '@angular/core';
import {NewsComponent} from '../news/news.component';
import {SlaidshowComponent} from '../slaidshow/slaidshow.component';

import { NewsService } from '../../services/news.service';
import { SlaidshowService } from '../../services/slaidshow.service';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NewsComponent, SlaidshowComponent, NewsService, SlaidshowService ]
})
export class MainComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }

}
