import { Component, OnInit } from '@angular/core';
import { Todolist } from '../../Todolist';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  "localitem":any
  title="hi"
  todos!: Todolist[];
  constructor() 
  { 
    this.localitem=localStorage.getItem("todos")
    if(this.localitem==null)
        this.todos=[]

    else{
      this.todos=(JSON.parse(this.localitem))
    }    
  }

  ngOnInit(): void {
  }
 
  deleteitem(todo:Todolist){
      console.log(todo)
      let index= this.todos.indexOf(todo)
      this.todos.splice(index,1)
      localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  additem(todo:Todolist){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
}

toggelitem(todo:Todolist){
  console.log(todo)
  let index= this.todos.indexOf(todo)
  this.todos[index].isactive= !this.todos[index].isactive
  localStorage.setItem("todos", JSON.stringify(this.todos))
}

}
