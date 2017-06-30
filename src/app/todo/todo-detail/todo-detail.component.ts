import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {TodoService} from '../todo.service';
import {Todo} from '../../domain/entities';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  //todo1: Todo ;
  
  todo1: Todo = {
      "id": "55ca8137-afda-9f00-1b20-575c9b7fb90d",
      "desc": "what can i ",
      "completed": false,
      "userId": 2
  };
  
  constructor(
    private todoService:TodoService,
    private route: ActivatedRoute,
    private localtion: Location,
  ){ };
  
  ngOnInit(): void {
   
   this.route.params
   .switchMap((params:Params)=>this.todoService
   .getTodo(params['id']))
   .subscribe(todo =>this.todo1=todo[0]);
  
  }
}
