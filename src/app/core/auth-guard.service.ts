import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service'

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url:string) : boolean{
    //console.log("-----------------------------------------------------");
    //console.log(localStorage.getItem('userId'));
    if(localStorage.getItem('userId')!==null){return true;}
    localStorage.setItem('redirectUrl', url);
    this.router.navigate(['/login']);
    return false;
  }
}
