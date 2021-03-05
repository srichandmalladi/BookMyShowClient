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
    return this.http.get<Theatre[]>(this.apiurl + '/Theatre');
  }

  getMoviesInCity(city: string): Observable<Movie_Theatre[]>{
    return this.http.get<Movie_Theatre[]>(this.apiurl + '/Movie/getMovies/' + city);
  }

  getMovie(showId: string) {
    return this.http.get<Movie_Theatre>(this.apiurl + '/Movie/getMovie/' + showId);
  }
  getAllMovies() {
    return this.http.get<Movie[]>(this.apiurl + '/Movie');
  }
}
