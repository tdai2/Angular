import {Routes, RouterModule} from '@angular/router';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {LoginComponent} from './login/login.component';


//import {TodoComponent} from './todo/todo.component';

const routes : Routes = [
    {
        path : '',
        redirectTo: 'todo/all',
        pathMatch : 'full'
    },
    {
        path: 'todo',
        redirectTo: 'todo/ALL'  
    },
    {
        path: 'login',
        component: LoginComponent 
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{}
