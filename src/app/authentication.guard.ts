import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenStorage } from './token.storage';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor( private router: Router) { }
  
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      if (TokenStorage.exists) {
          return true;
      } else {
          this.router.navigate(['/']);
          
      }
      return false;
  }


}
