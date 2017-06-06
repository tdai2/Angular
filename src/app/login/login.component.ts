import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'

@Component({
  selector: 'app-login',
  template: `
    <div>
    <input #usernameRef type = "text">
    <input #passwordRef type = "passwrod">
    <button (click)="clickLogin(usernameRef.value,passwordRef.value)"> Login </button>
    </div>
  `,
  styles: []
})

export class LoginComponent implements OnInit {
  service :AuthService ;
  constructor() {
    this.service = new AuthService();

   }
  ngOnInit() {
  }

//clickLogin(username,password) {console.log('login username is:'+username+"\nlogin password is:"+password);}
clickLogin(username,password) {console.log('auth result is:'+this.service.loginWithCredentials(username,password));}

}



