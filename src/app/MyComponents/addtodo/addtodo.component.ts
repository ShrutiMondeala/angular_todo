import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todolist } from 'src/app/Todolist';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  "title":string
  "discription":string
  @Output() todoAdd: EventEmitter<Todolist>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    const todo = {
      srno:8,
      title:this.title,
      discription:this.discription,
      isactive:true
    }
       
    this.todoAdd.emit(todo);
  }
}
