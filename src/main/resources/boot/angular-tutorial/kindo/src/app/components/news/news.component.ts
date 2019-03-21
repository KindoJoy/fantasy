import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { RequestService } from '../../services/request.service';

import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {

  @ViewChild('list') private list: any;
  @ViewChild('content') private content: any;

  private news: any[] = [];

  constructor(private router: Router, private activedRoute: ActivatedRoute, private rs: RequestService) {

  }

  ngOnInit() {
    this.news = Array.from({ length: 10 }, (v, i) => ({ id: i, title: 'news' + i, content: 'content' + i }));

    this.activedRoute.params.subscribe(data => {
      console.log('news cmp:', data);
    });

    this.activedRoute.queryParams.subscribe(data => {
      console.log('news cmp:', data);
      let { aid } = data;
      if (aid) {
        this.content.setDisplay(this.news[aid].content);
      }
    });

  }

  ngAfterViewInit() {
    let stream = this.rs.rxjsGetIntervalData();
    let subscribe = stream.pipe(
      filter(value => value % 2 === 0),
      map(value => value * value)
    ).subscribe(value => {
      if (value >= 100) {
        subscribe.unsubscribe();
      }
      console.log(value);
    });
  }

  getIdFromViewList(id) {
    this.content.setDisplay(this.news[id].content);

    this.rs.rxjsGetData().subscribe(data => {
      console.log(data);
    });
  }

  goHome() {
    let queryParams: NavigationExtras = {
      queryParams: {
        term: 'back'
      }
    };
    this.router.navigate(['home'], queryParams);
  }
}
