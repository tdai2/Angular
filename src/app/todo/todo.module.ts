import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {routing} from './todo.routes';
import {TodoComponent} from './todo.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';

import {TodoService} from './todo.service';


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
        TodoHeaderComponent
    ],
    providers:[
        {provide: 'todoService', useClass: TodoService}
    ]
})
export class TodoModule {}



