import { Component, OnInit } from '@angular/core';
import { TheatreService } from '../services/theatre.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-show-cities',
  templateUrl: './show-cities.component.html',
  styles: [
  ]
})
export class ShowCitiesComponent implements OnInit {
  cities: string[];
  selectedCity: string;
  constructor(private thservice: TheatreService, private router: Router) {
  }

  ngOnInit(): void {
    this.thservice.getTheatres().subscribe(
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