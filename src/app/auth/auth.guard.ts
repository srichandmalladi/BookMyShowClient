import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { RoleGuardService } from './role-guard.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private userService: UserService,
    private roleGuardService: RoleGuardService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem('token') != null) {
      let roles = next.data['permittedRoles'] as Array<string>;
      if (roles) {
        if (this.roleGuardService.roleGuard(roles)) return true;
        else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
    }
    else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
