import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private display: string = '';

  constructor() { }

  ngOnInit() {

  }

  setDisplay(content) {
    this.display = content;
  }
}
