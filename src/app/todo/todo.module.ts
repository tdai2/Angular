import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {routing} from './todo.routes';
import {TodoComponent} from './todo.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';

import {TodoService} from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {AuthGuardService} from '../core/auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations:[
        TodoComponent,
        TodoFooterComponent,
        TodoHeaderComponent,
        TodoItemComponent,
        TodoListComponent
    ],
    providers:[
        {provide: 'todoService', useClass: TodoService},
        AuthGuardService 
    ]
})
export class TodoModule {}



