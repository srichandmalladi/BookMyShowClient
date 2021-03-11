import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Movie } from '../models/movie.model';
import { Show } from '../models/show.model';
import { Theatre } from '../models/theatre.model';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private apiurl = "http://localhost:59491/api";

  constructor(private http: HttpClient) { }

  addMovie(movie: Movie) {
    return this.http.post(this.apiurl + '/movie/add', movie);
  }

  addTheatre(theatre: Theatre) {
    return this.http.post(this.apiurl + '/theatre/add', theatre);
  }

  addShow(show: Show) {
    return this.http.post(this.apiurl + '/show/add', show);
  }
}
