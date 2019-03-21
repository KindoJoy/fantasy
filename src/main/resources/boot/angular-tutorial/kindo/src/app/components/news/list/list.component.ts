import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() private news: any;
  @Output() private outer = new EventEmitter();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(data => {
      console.log('list cmp:', data);
    });

    this.route.queryParams.subscribe(data => {
      console.log('list cmp:', data);
    });
  }

  send(id) {
    this.outer.emit(id);
  }
}
