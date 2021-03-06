import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../model/movie.model';
import { Theatre } from '../model/theatre.model';
import { AdminService } from '../services/admin.service';
import { TheatreService } from '../services/theatre.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.sass']
})
export class AddShowComponent implements OnInit {

  constructor(private thservice: TheatreService,
    private fb: FormBuilder,
    private adminService: AdminService,
    private toastr: ToastrService,
    private route: Router) { }

  cities: string[] = [];
  allTheatres: Theatre[] = [];
  theatres: Theatre[] = [];
  theatresInCity: string[] = [];
  movies: Movie[] = [];
  li: number[] = [];
  time: string[] = ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"];

  ngOnInit(): void {
    this.thservice.getTheatres().subscribe(
      data => {
        this.allTheatres = data;
        this.cities = Array.from(new Set(this.allTheatres.map(th => th.city)));
      }
    );
  }

  formModel = this.fb.group({
    SelectedCity: ['', Validators.required],
    Theatre: ['', Validators.required],
    Movie: ['', Validators.required],
    Slot: ['', Validators.required]
  });

  getTheatres() {
    this.theatres = this.allTheatres.filter(th => th.city == this.formModel.value.SelectedCity);
  }
  getMoviesAndSlot() {
    this.li = [];
    var slot = this.theatres.filter(th => th.id).map(th => th.noOfSlots)[0];
    this.thservice.getAllMovies().subscribe(data => this.movies = data);
    for (var j = 1; j <= slot; j++) {
      this.li.push(j);
    }
  }
  onSubmit() {
    this.adminService.addShow(this.formModel.value).subscribe(
      (res: any) => {
        if (res == null) {
          this.formModel.reset();
          this.toastr.success('show added', 'Registration successful.');
          this.route.navigate(['/home']);
        }
        else {
          this.toastr.error('Adding new Show failed');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
