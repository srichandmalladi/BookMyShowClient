import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TheatreService } from '../services/theatre.service';

@Component({
  selector: 'app-show-cities',
  templateUrl: './show-cities.component.html'
})

export class ShowCitiesComponent implements OnInit {

  cities: string[];
  selectedCity: string;

  constructor(private theatreService: TheatreService,
    private router: Router) { }

  ngOnInit(): void {
    this.theatreService.getTheatres().subscribe(
      data => {
        var theatres = data;
        this.cities = Array.from(new Set(theatres.map(th => th.city)));
      }
    );
  }

  citySelected(): void {
    this.router.navigate(['home/city', this.selectedCity]);
  }
}
