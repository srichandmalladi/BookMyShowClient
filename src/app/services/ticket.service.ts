import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ticket } from '../models/ticket.model';
import { TicketView } from '../models/ticket-view.model';

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  private apiurl = "http://localhost:59491/api/ticket";

  constructor(private http: HttpClient) { }

  bookTickets(ticket: Ticket) {
    return this.http.post(this.apiurl + "/add", ticket);
  }

  getTicketsByShowId(showId: number) {
    return this.http.get<Ticket[]>(this.apiurl + "/getTicketsByShowId/" + showId);
  }

  getTicketsByUserId(userId: string) {
    return this.http.get<TicketView[]>(this.apiurl + "/getTicketsByUserId/" + userId);
  }

  getTicketByTicketId(ticketId: number) {
    return this.http.get<TicketView>(this.apiurl + "/getTicketsByTicketId/" + ticketId);
  }
}

