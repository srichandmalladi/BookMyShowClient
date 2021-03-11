import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from '../models/user.model';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  readonly BaseURI = 'http://localhost:59491/api';

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(this.BaseURI + '/user/register', user);
  }

  login(formData: any) {
    return this.http.post(this.BaseURI + '/user/login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/userProfile');
  }

  roleMatch(allowedRoles: any): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach((element :any)=> {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
