import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path:'hero',
    component: FormComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule],
  declarations: [FormComponent]
})
export class FormModule { };
