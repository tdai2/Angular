import { Component, OnInit, Inject } from '@angular/core';
//import {AuthService} from '../core/auth.service'

@Component({
  selector: 'app-login',
  template:` 
    <div>
        <form #formRef = "ngForm"
        (ngSubmit) = "onSubmit (formRef.value)"
        >
          <fieldset ngModuleGroup = "login">
                <input  type = "text" 
                name = "loginUsername"
                [(ngModel)]="username"
                required 
                #usernameRef = "ngModel"
                minlength = "3"
                placeholder = "Please input the username"
                
                >
                
                <div *ngIf ="usernameRef.errors?. required"> The username is required</div>
                <div *ngIf = "usernameRef.errors?. minlength"> The username length should be at least 3 charactors </div>

                <input type = "passwrod" [(ngModel)] = "password"
                name="loginPassword"
                required 
                #passwordRef = "ngModel"
                minlength = "8"
                placeholder = "Please input the password"
                >
                {{passwordRef.errors|json}}
                <div *ngIf="passwordRef.errors?. required"> The password is required. </div>
                <div *ngIf="passwordRef.errors?. minlength"> The length of password should be at least 8 charactors. </div>
                
                <button type="submit"> Login</button>
            </fieldset>
        </form>
    </div>
  `,
  styles: [`
  input.ng-invalid {border:3px solid red;}
  input.ng-valid{border:3px solid green;}
  input.
  `],
  providers:[]
})
//<button (click)="clickLogin()"> Login </button>

export class LoginComponent implements OnInit {
  //service :AuthService ;
  username = '';
  password = '';
  constructor(@Inject('auth') private service) {  

   }
  ngOnInit() {
    //this.username = "please input username"
    
  }

//clickLogin(username,password) {console.log('login username is:'+username+"\nlogin password is:"+password);}
clickLogin() {console.log('auth result is:'+this.service.loginWithCredentials(this.username,this.password));}
onSubmit(formValue){
  console.log(('auth result is:'+this.service.loginWithCredentials(formValue.login.username, formValue.lgoin.password)));
}
clearUsername(){this.username = ''} 
clearPassword(){this.password = ''} 
}



