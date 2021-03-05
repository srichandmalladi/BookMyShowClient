import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

import { TheatreService } from './theatre.service';
import { Movie_Theatre } from '../model/movie_theatre.model';
import { Ticket } from '../model/ticket.model';
import { UserService } from '../shared/user.service';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiurl = "http://localhost:59491/api"
  ticket;

  constructor(private theatreService: TheatreService, private http: HttpClient, private toastr: ToastrService, private route: Router, private userService: UserService) { }


  booktickets(showId: string, tickets: number, slot: number) {
    this.theatreService.getMovie(showId).subscribe(data => {
      if (data.noOfTicketsBooked + tickets <= data.noOfSeats) {
        this.makeBooking(data, tickets, slot).subscribe(
          (res: any) => {
            if (res == null) {
              this.toastr.success('Booking successful');
              this.ticket = { "movie": data, "noOfTickets": tickets, "slot": slot }
              this.route.navigate(['home/viewTicket']);
            }
            else {
              this.toastr.error('Booking failed');
              console.log(res);
            }
          }
        );
      }
      else {
        this.toastr.error("Booking failed seats not available");
      }
    });
  }
  makeBooking(movie: Movie_Theatre, noOfTickets: number, slot: number) {
    var ticket;
    ticket = new Ticket({ showId: movie.showId, userId: localStorage.getItem('userid'), noOfTicketsBooked: noOfTickets, slot: +slot });
    return this.http.post(this.apiurl + "/Ticket/Add", ticket);
  }
}

