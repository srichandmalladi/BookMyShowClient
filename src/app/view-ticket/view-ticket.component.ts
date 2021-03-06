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
  time: string[] = ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"];
  ngOnInit(): void {
    this.Ticket = this.ticketService.ticket;
  }

}
