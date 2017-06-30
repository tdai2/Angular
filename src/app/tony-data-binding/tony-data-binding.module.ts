import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TonyDataBindingComponent } from './tony-data-binding.component';
import {Routes,RouterModule} from '@angular/router';


const datarouting:Routes = [
  {
    path: 'data-binding',
    component: TonyDataBindingComponent
  },
]


@NgModule({
  imports: [CommonModule,RouterModule.forChild(datarouting)],
  declarations: [TonyDataBindingComponent]
})

export class TonyDataBindingModule { }
