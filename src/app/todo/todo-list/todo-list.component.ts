import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {Todo} from '../../domain/entities';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  _todos: Todo[] = [];
  @Input()

  set todos(todos:Todo[]){
    this._todos = [... todos];
  }
k
  get todos(){
    return this._todos;
  }

 constructor(
    private router: Router,) { }

  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();

  onRemoveTriggered(todo:Todo){
    this.onRemoveTodo.emit(todo);
  }

  onToggleTriggered(todo:Todo){
    this.onToggleTodo.emit(todo);
  }

  @Output() onToggleAll = new EventEmitter<boolean>();
  onToggleAllTriggered(){
    this.onToggleAll.emit(true);
  }


}
