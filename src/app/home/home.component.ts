import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoleGuardService } from '../auth/role-guard.service';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  userDetails: any;
  isAdmin: boolean;

  constructor(private router: Router,
    private userService: UserService,
    private roleGuardService: RoleGuardService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      (res: any) => {
        this.userDetails = res;
        localStorage['userId'] = res['id'];
      },
      err => {
        console.log(err);
      },
    );
    this.isAdmin = this.roleGuardService.roleGuard(['admin']);
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this.router.navigate(['/user/login']);
  }
}
