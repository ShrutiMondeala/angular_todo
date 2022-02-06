import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todolist } from 'src/app/Todolist';


@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {
  @Input() todo!: Todolist; //passing props
                             //passing props
  @Output() todoDelete: EventEmitter<Todolist>=new EventEmitter();
  @Output() todoCheck: EventEmitter<Todolist>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todolist){
    this.todoDelete.emit(todo)
    console.log("Deleted");
  }

  onCheckBoxClick(todo:Todolist){
    this.todoCheck.emit(todo)
  }
}


//event emitter is use to do changes in the list