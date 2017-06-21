import { Component, OnInit, Inject } from '@angular/core';
//import {AuthService} from '../core/auth.service'
import{Router,ActivatedRoute, Params} from '@angular/router';
import {Auth } from '../domain/entities';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
//<button (click)="clickLogin()"> Login </button>

export class LoginComponent implements OnInit {
  //service :AuthService ;
  username = '';
  password = '';
  auth:Auth;
  constructor(@Inject('auth') private service, private router:Router) {  

   }
  ngOnInit() {
    //this.username = "please input username"
    
  }

//clickLogin(username,password) {console.log('login username is:'+username+"\nlogin password is:"+password);}
//clickLogin() {console.log('auth result is:'+this.service.loginWithCredentials(this.username,this.password));}
onSubmit(formValue){
  this.service.loginWithCredentials(formValue.login.username, formValue.login.password).then(auth => {
    let redirectUrl = (auth.redirectUrl === null)?'/':auth.redirectUrl;
    if(!auth.hasError){
      this.router.navigate([redirectUrl]);
      localStorage.removeItem('redirectUrl');}
    else{
      this.auth = Object.assign({}, auth);}
  }).catch(
    console.log("authfail"))
  
  console.log(('auth result is:'+this.service.loginWithCredentials(formValue.login.username, formValue.login.password)));
}
clearUsername(){this.username = ''} 
clearPassword(){this.password = ''} 
}



