import {Routes, RouterModule} from '@angular/router';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';

//import {PlaygroundComponent}  from './playground/playground.component';

//import {TodoComponent} from './todo/todo.component';

const routes : Routes = [
    {
        path: 'playground',
        loadChildren: 'app/playground/playground.module#PlaygroundModule',
    },
    /*
    {
        path: 'playground',
        component: PlaygroundComponent
    },*/
    {
        path: 'login',
        component: LoginComponent 
    },
    /*
    {
        path : '',
        redirectTo: 'todo/All',
        pathMatch : 'full'
    },
    */
    {
        path : '',
        redirectTo: 'playmodule',
        pathMatch : 'full'
    },
    {
        path: 'todo',
        redirectTo: 'todo/ALL'  
    },
    
];

@NgModule(
    {
    
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{}
