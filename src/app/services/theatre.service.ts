import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieTheatreView } from '../models/movie-theatre-view.model';
import { Theatre } from '../models/theatre.model';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {
  private apiurl = "http://localhost:59491/api"

  constructor(private http: HttpClient) { }

  getTheatres(): Observable<Theatre[]>{
    return this.http.get<Theatre[]>(this.apiurl + '/theatre/all');
  }

  getMoviesInCity(city: string): Observable<MovieTheatreView[]>{
    return this.http.get<MovieTheatreView[]>(this.apiurl + '/movie/getMoviesByCity/' + city);
  }

  getMovie(showId: number) {
    return this.http.get<MovieTheatreView>(this.apiurl + '/movie/getMovieByShowId/' + showId);
  }

  getAllMovies() {
    return this.http.get<Movie[]>(this.apiurl + '/movie/all');
  }
}
