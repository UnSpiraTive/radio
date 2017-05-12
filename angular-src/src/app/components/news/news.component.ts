import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  Fnews: Array<String>;

  constructor(private _newsService: NewsService) {
    this._newsService.getNews()
      .subscribe(news => {
        this.Fnews = news;
      });
  }

  ngOnInit() {
  }

}
