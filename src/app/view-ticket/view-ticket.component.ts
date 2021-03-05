import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.sass']
})
export class ViewTicketComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }
  Ticket;
  ngOnInit(): void {
    this.Ticket = this.ticketService.ticket;
  }

}
