import { Component, OnInit } from '@angular/core';

import { TicketView } from '../models/ticket-view.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html'
})

export class TicketHistoryComponent implements OnInit {

  tickets: any[];
  timeSlots: string[] = ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"];
  presentDay = new Date();

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTicketsByUserId(localStorage.getItem('userId')).subscribe(data => {
      this.tickets = data;
      this.tickets.forEach(ticket => ticket.isPast = this.presentDay > new Date(ticket.date))
    });
  }
}
