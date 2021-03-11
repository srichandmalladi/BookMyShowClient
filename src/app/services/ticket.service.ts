import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ticket } from '../models/ticket.model';
import { TicketView } from '../models/ticket-view.model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiurl = "http://localhost:59491/api";
  currentTicket: TicketView;

  constructor(private http: HttpClient) { }

  bookTickets(ticket: Ticket) {
    return this.http.post(this.apiurl + "/ticket/add", ticket);
  }

  getTicketsByShowId(showId: number) {
    return this.http.get<Ticket>(this.apiurl + "/ticket/getTicketsByShowId/" + showId);
  }

  getTicketsByUserId(userId: string) {
    return this.http.get<TicketView[]>(this.apiurl + "/ticket/getTicketsByUserId/" + userId);
  }

  getTicketByTicketId(ticketId: number) {
    return this.http.get<TicketView>(this.apiurl + "/ticket/getTicketsByTicketId/" + ticketId);
  }
}

