import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TonyPlayComponent } from './tony-play.component';
import { Play1Component } from './play1/play1.component';
import { Play2Component } from './play2/play2.component';
import { Play3Component } from './play1/play3/play3.component';



const Tplayroutes:Routes = [
    {
      path :'playmodule',
      component : TonyPlayComponent
    },
    {
        path : "playmodule/play1",
        component : Play1Component
    },
]

@NgModule({
    imports: [CommonModule,RouterModule.forChild(Tplayroutes)],
    exports: [RouterModule],
    declarations: [TonyPlayComponent, Play1Component, Play2Component, Play3Component]
})
export class TonyPlayModule { }
