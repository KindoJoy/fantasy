import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title;

  public name = 'this is a public property!';

  private hide: string = 'This is a private string property!';

  private flag: boolean = false;

  private numbers: Array<number> = [0, 1, 2, 3, 4, 5];

  private style: object = { color: 'red', fontWeight: 800 };

  private httpStatus: number = 404;

  private now: Date = new Date();

  tag: object = { title: 'this is a title of tag!', content: 'this is a content of tag!' };

  public htmlString: string = '<p>this is a html string!</p>';
  public innerHtml: string = '<p>this is a inner html!</p>';

  public languages: Array<string> = ['Java', 'Javascript', 'python', 'C#'];

  public persons: any[] = [
    { name: 'Jack', age: 18 },
    { name: 'Bruce', age: 17 },
    { name: 'Luna', age: 17 }
  ];

  public heros: Array<object> = [
    {
      profession: 'Assassin',
      description: 'Good at harvesting and raiding',
      heros: [
        { name: 'PA', sex: 'female' },
        { name: 'SA', sex: 'male' }
      ]
    },
    {
      profession: 'Magician',
      description: 'Good at controlling, high explosion',
      heros: [
        { name: 'Lina', sex: 'female' },
        { name: 'Lion', sex: 'male' }
      ]
    }
  ];

  constructor() {
    this.title = 'This is a home page!';
  }

  ngOnInit() {
  }

  btnClick() {
    alert(this.name);
  }

  changeHttpStatus() {
    this.httpStatus = 200;
  }

  keyDown(e){
    console.log(e);
  }
}
