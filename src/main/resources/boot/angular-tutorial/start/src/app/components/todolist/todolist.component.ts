import { Component, OnInit } from '@angular/core';

import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  private sessionKey: string = 'todo-list';

  private newTodoContent: string = '';
  private todoList: object[] = [];
  private finishedList: object[] = [];

  constructor(private session: SessionStorageService) {
    this.read();
  }

  ngOnInit() {

  }

  newTodoContentChange(e) {
    let { target, keyCode } = e;
    let { value } = target;
    if (!value) { return; }
    if (keyCode === 13) {
      this.addTodo(value);
    }
  }

  todoStatusChange(e, todo: object) {
    let { checked } = e.target;
    let { todoList, finishedList } = this;
    if (checked) {
      todoList.splice(todoList.findIndex(item => todo === item), 1);
      finishedList.push(todo);
    } else {
      finishedList.splice(finishedList.findIndex(item => todo === item), 1);
      todoList.push(todo);
    }
    this.save();
  }

  removeTodo(todo: object) {
    this.todoList.splice(this.todoList.findIndex(item => todo === item), 1);
    this.save();
  }

  addTodo(content: string) {
    let target = this.todoList.find((item: any) => content === item.content);
    if (target) {
      return alert('it exists!');
    }
    this.todoList.push({ content, status: false });
    this.save();
    this.newTodoContent = '';
  }

  save() {
    this.session.set(this.sessionKey, this.todoList.concat(this.finishedList));
  }

  read() {
    this.todoList.length = 0;
    this.finishedList.length = 0;

    let list: object[] = this.session.get(this.sessionKey);
    list && list.forEach((item: any) => {
      if (item.status) {
        this.finishedList.push(item);
      } else {
        this.todoList.push(item);
      }
    });
  }

}