import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.sass']
})
export class AddMovieComponent implements OnInit {

  constructor(private fb: FormBuilder, private adminService: AdminService, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
  }
  formModel = this.fb.group({
    MovieName: ['', Validators.required],
    ImageUrl: [''],
    Genre: [''],
    Description: [''],
    Rating:['']
  });

  onSubmit() {
    this.adminService.addMovie(this.formModel.value).subscribe(
      (res: any) => {
        if (res == null) {
          this.formModel.reset();
          this.toastr.success('Movie added', 'Registration successful.');
          this.route.navigate(['/home']);
        }
        else {
          this.toastr.error('Movie add failed');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
