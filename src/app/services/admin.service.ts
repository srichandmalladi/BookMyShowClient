import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Show } from '../model/show.model';
import { Theatre } from '../model/theatre.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiurl = "http://localhost:59491/api"
  constructor(private http: HttpClient) { }

  addMovie(model: any) {
    var movie = new Movie({
      'title': model.MovieName,
      'imageUrl': model.ImageUrl,
      'genre': model.Genre,
      'description': model.Description,
      'rating': +model.Rating
    });
    return this.http.post(this.apiurl + '/Movie/Add', movie);
  }

  addTheatre(model: any) {
    var theatre = new Theatre({
      'name': model.TheatreName,
      'address': model.Address,
      'city': model.City,
      'noOfSlots': +model.NoOfSlots,
      'noOfSeats': +model.NoOfSeats,
      'ticketCost': +model.TicketCost
    });
    return this.http.post(this.apiurl + '/Theatre/Add', theatre);
  }
  addShow(model: any) {
    var show = new Show({
      'theatreId': +model.Theatre,
      'movieId': +model.Movie,
      'slot': +model.Slot,
      'noOfTicketsBooked': 0
    });
    return this.http.post(this.apiurl + '/Show/Add', show);
  }
}
