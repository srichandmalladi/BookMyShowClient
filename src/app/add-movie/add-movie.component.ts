import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AdminService } from '../services/admin.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
})

export class AddMovieComponent {

  movieForm: FormGroup;

  constructor(private adminService: AdminService,
    private toastr: ToastrService,
    private route: Router)
  {
    this.movieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      imageUrl: new FormControl(''),
      genre: new FormControl(''),
      description: new FormControl(''),
      rating: new FormControl('')
    });
  }

  onSubmit() {
    this.adminService.addMovie(new Movie(this.movieForm.value)).subscribe(
      (res: any) => {
        if (!res) {
          this.movieForm.reset();
          this.toastr.success('Movie added', 'Registration successful.');
          this.route.navigate(['/home']);
        }
        else {
          this.toastr.error('Movie add failed', 'Error occured');
        }
      }
    );
  }
}
