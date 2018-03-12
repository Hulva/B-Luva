import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppGuardGuard implements CanActivate, CanLoad {
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad', route);
    return true;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate', next, state);
    return true;
  }
}
