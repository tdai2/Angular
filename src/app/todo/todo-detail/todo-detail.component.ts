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
  @Input() todo:Todo
  constructor(
    private todoService:TodoService,
    private route: ActivatedRoute,
    private localtion: Location
  ){ }
  ngOnInit(): void {
   console.log(this.route.params) 
   this.route.params.
   switchMap((params:Params)=>this.todoService.getTodo(params['id'])) 
   .subscribe(todo => this.todo=todo);
  }
}
