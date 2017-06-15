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
import { DataCenterComponent } from './data-center/data-center.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';


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
        TodoListComponent,
        DataCenterComponent,
        UserItemComponent,
        UserListComponent
    ],
    providers:[
        {provide: 'todoService', useClass: TodoService}
    ]
})
export class TodoModule {}



