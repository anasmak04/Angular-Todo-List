import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
   Item:string = "";

  constructor() {}

  ngOnInit(): void {}

  list: any[] = [];
  addTask(item: String) {
    this.list.push({ id: this.list.length, name: item });
    this.Item = "";
  }

  RemoveTask(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }

  EmptyInput(){
  }
}
