import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Movie_Theatre } from '../model/movie_theatre.model';
import { TheatreService } from '../services/theatre.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.sass']
})
export class ShowMoviesComponent implements OnInit {
  city: string;
  movies: Movie_Theatre[];

  constructor(private route: ActivatedRoute, private theaterService: TheatreService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.city = param['city'];
      }
    );
    this.theaterService.getMoviesInCity(this.city).subscribe(data =>
      this.movies = data
    );
  }
  bookTickets(movie: Movie_Theatre) {
    this.router.navigate(['home/booktickets', movie.showId]);
  }

}
