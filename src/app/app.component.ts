import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  list: any[] = [];
  addTask(item: String) {
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }

  RemoveTask(id:number){
    console.warn("remove")
    this.list=this.list.filter(item => item.id !== id);
  }
}
