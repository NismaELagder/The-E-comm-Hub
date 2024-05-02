import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const protectedRoutes: string[] = ['/dashboard'];
    const user = JSON.parse(localStorage.getItem('currentUser')!);
    // not logged in so redirect to login page
    return protectedRoutes.includes(state.url) && !user
      ? this.router.navigate(['/login'])
      : user.currentUser
      ? this.router.navigate([''])
      : true;
  }
}
