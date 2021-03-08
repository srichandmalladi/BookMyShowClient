import { Component, OnInit } from '@angular/core';
import { TicketView } from '../model/ticketView.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.sass']
})
export class TicketHistoryComponent implements OnInit {

  tickets: TicketView[];
  time: string[] = ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTicketsByUserId(localStorage.getItem('userid')).subscribe(data => {
      this.tickets = data;
    });
  }
  today = new Date();
  check(date) {
    return this.today < new Date(date);
  }

}
