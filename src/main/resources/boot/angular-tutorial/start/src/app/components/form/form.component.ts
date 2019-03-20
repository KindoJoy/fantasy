import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private name: string = '';
  private sex: number = 0;
  private city: number = 0;
  private hobby: Array<number> = [];
  private remarks: string = '';

  private citys: Array<object> = [
    { id: 0, name: "Beijing" },
    { id: 1, name: "Xian" },
    { id: 2, name: "Shanghai" }
  ];

  private hobbies: object[] = [
    { id: 0, name: "Sleep", checked: false },
    { id: 1, name: "Knock Code", checked: false },
    { id: 2, name: "Eat something", checked: false }
  ];

  private data: object;

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    this.data = {
      name: this.name,
      sex: +this.sex,
      city: +this.city,
      hobby: this.hobbies.filter((item: any) => item.checked).map((item: any) => item.id),
      remarks: this.remarks
    }
  }
}
