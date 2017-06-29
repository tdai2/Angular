import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Play1Component } from './play1/play1.component';
import { TonyPlay1Component } from './tony-play1.component';
import {TonyPlay1RoutingModule} from './tony-play1.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TonyPlay1RoutingModule
  ],
  declarations: [Play1Component, TonyPlay1Component]
})
export class TonyPlay1Module { }
