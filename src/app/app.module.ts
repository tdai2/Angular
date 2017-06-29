import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
//import {InMemoryTodoDbService} from './todo/todo-data';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './core/auth.service';
import{UserService} from './core/user.service'
import{TodoService} from './todo/todo.service'
//import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {TodoModule} from './todo/todo.module';
//import {PlaygroundModule} from './playground/playground.module';
import {TonyPlayModule} from './tony-play/tony-play.module'
import {TonyPlay1Module} from './tony-play1/tony-play1.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  //  InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    AppRoutingModule,
    TodoModule,
    TonyPlayModule,
    TonyPlay1Module
  //  PlaygroundModule

/*
    RouterModule.forRoot([
      {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path : 'login',
        component: LoginComponent
      }
    ])
  */
  ],

  providers: [
    {provide:'auth', useClass: AuthService},
    {provide:'user', useClass: UserService },
    {provide:TodoService, useClass: TodoService}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
