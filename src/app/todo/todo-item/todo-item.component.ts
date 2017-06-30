
import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {TodoService} from '../todo.service';
import {Todo} from '../../domain/entities';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent  {
  @Input() isChecked: boolean = false;
  @Input() todoDesc: string = '';
  @Input() todoID : string = '';
  @Output() onToggleTriggered = new EventEmitter<boolean>();
  @Output() onRemoveTriggered = new EventEmitter<boolean>();

  @Input() todo:Todo
  constructor(
    private todoService:TodoService,
    private route: ActivatedRoute,
    private localtion: Location
  ){ }
  /*
  gotoDetail(): void {
    this.route.navigate(['/detail', this.selectedHero.id]);
  }
  */
  toggleTodo(){
    this.onToggleTriggered.emit(true);
  }

  removeTodo(){
    this.onRemoveTriggered.emit(true)
  }

}
