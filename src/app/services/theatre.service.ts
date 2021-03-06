import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';
import { Movie_Theatre } from '../model/movie_theatre.model';
import { Theatre } from '../model/theatre.model';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {
  private apiurl = "http://localhost:59491/api"

  constructor(private http: HttpClient) {
  }

  getTheatres(): Observable<Theatre[]>{
    return this.http.get<Theatre[]>(this.apiurl + '/theatre/all');
  }

  getMoviesInCity(city: string): Observable<Movie_Theatre[]>{
    return this.http.get<Movie_Theatre[]>(this.apiurl + '/movie/getMoviesByCity/' + city);
  }

  getMovie(showId: number) {
    return this.http.get<Movie_Theatre>(this.apiurl + '/movie/getMovieByShowId/' + showId);
  }
  getAllMovies() {
    return this.http.get<Movie[]>(this.apiurl + '/movie/all');
  }
}
