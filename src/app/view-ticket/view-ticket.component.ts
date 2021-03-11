import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TicketView } from '../models/ticket-view.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html'
})

export class ViewTicketComponent implements OnInit {

  ticket: TicketView;
  ticketId: number;
  timeSlots: string[] = ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"];

  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.ticketId = param['ticketId'];
      }
    );
    this.ticketService.getTicketByTicketId(this.ticketId).subscribe(data => {
      this.ticket = data;
    });
  }
}
