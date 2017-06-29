import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';

import {TodoService} from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {AuthGuardService} from '../core/auth-guard.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        TodoRoutingModule
    ],
    declarations:[
        TodoComponent,
        TodoFooterComponent,
        TodoHeaderComponent,
        TodoItemComponent,
        TodoListComponent,
        TodoDetailComponent
    ],
    providers:[
        {provide: 'todoService', useClass: TodoService},
        AuthGuardService 
    ]
})
export class TodoModule {}



