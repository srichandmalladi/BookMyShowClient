import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Movie } from '../models/movie.model';
import { Show } from '../models/show.model';
import { Theatre } from '../models/theatre.model';
import { AdminService } from '../services/admin.service';
import { TheatreService } from '../services/theatre.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html'
})

export class AddShowComponent implements OnInit {

  cities: string[];
  allTheatres: Theatre[];
  theatres: Theatre[];
  theatresInCity: string[];
  movies: Movie[];
  slots: number[];
  timeSlots: string[] = ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"];
  showForm: FormGroup;

  constructor(private thservice: TheatreService,
    private adminService: AdminService,
    private toastr: ToastrService,
    private route: Router)
  {
    this.showForm = new FormGroup({
      selectedCity: new FormControl('', Validators.required),
      theatreId: new FormControl('', Validators.required),
      movieId: new FormControl('', Validators.required),
      slot: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.thservice.getTheatres().subscribe(
      data => {
        this.allTheatres = data;
        this.cities = Array.from(new Set(this.allTheatres.map(th => th.city)));
      }
    );
  }

  getTheatres() {
    this.theatres = this.allTheatres.filter(th => th.city == this.showForm.value.selectedCity);
  }

  getMoviesAndSlot() {
    this.slots = [];
    var slot = this.theatres.filter(th => th.id).map(th => th.noOfSlots)[0];
    this.thservice.getAllMovies().subscribe(data => this.movies = data);
    for (var j = 1; j <= slot; j++) {
      this.slots.push(j);
    }
  }

  onSubmit() {
    this.adminService.addShow(new Show(this.showForm.value)).subscribe(
      (res: any) => {
        if (res == null) {
          this.showForm.reset();
          this.toastr.success('show added', 'Registration successful.');
          this.route.navigate(['/home']);
        }
        else {
          this.toastr.error('Adding new Show failed','Error Occured');
        }
      }
    );
  }
}
