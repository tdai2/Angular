import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { TonyPlay1Component } from './tony-play1.component';
import {Play1Component} from './play1/play1.component';


const routes: Routes = [
    

    {
        path:'tonyplay', 
        component:TonyPlay1Component
    },
    {
        path:'tonyplay/play1', 
        component:Play1Component
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class TonyPlay1RoutingModule{}