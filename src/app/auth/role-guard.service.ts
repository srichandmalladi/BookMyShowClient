import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RoleGuardService {

  constructor() { }

  roleGuard(allowedRoles: any): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach((element: any) => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
