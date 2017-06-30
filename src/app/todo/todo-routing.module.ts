import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {TodoComponent} from './todo.component';
import {AuthGuardService} from '../core/auth-guard.service';
import {TodoDetailComponent} from './todo-detail/todo-detail.component'

const routes: Routes = [
   // {path:'todo',
   // component: TodoComponent},
    {path:'todo/:filter',
    canActivate:[AuthGuardService],
    component: TodoComponent},
    {
        path: 'detail/:id',
        component : TodoDetailComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class TodoRoutingModule{};
