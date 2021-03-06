import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        localStorage['userid'] = res['id'];
      },
      err => {
        console.log(err);
      },
    );
  }
  checkRole() {
    return this.userService.roleMatch(['admin']);
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this.router.navigate(['/user/login']);
  }
}
