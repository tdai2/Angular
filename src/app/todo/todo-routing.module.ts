import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {TodoComponent} from './todo.component';
import {AuthGuardService} from '../core/auth-guard.service';

const routes: Routes = [
   // {path:'todo',
   // component: TodoComponent},
    {path:'todo/:filter',
    canActivate:[AuthGuardService],
    component: TodoComponent,}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class TodoRoutingModule{};
