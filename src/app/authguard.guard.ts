import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';
import { NewsService }      from './news.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: NewsService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let  response:boolean;
      response=this.authService.getuser();

    console.log(response);

    if(response == true){
       return true;
    }else{
      return false;
    }
   
  }



}