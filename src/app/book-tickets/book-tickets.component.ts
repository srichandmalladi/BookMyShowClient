import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

import { MovieTheatreView } from '../models/movie-theatre-view.model';
import { Ticket } from '../models/ticket.model';
import { TheatreService } from '../services/theatre.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html'
})

export class BookTicketsComponent implements OnInit {

  showId: number;
  movie: MovieTheatreView;
  bookingForm: FormGroup;
  timeSlots: string[] = ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"];
  slots: Number[];
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router,
    private theaterService: TheatreService,
    private ticketService: TicketService)
  {
    this.bookingForm = new FormGroup({
      noOfTicketsBooked: new FormControl('', Validators.required),
      slot: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      (param: Params) => {
        this.showId = param['showId'];
      }
    );
    this.slots = [];
    this.theaterService.getMovie(this.showId).subscribe(data => {
      this.movie = data;
      for (var j = 1; j <= this.movie.noOfSlots; j++) {
        this.slots.push(j);
      }
    });
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate);
  }

  bookTicket(): void {
    var ticket: Ticket = new Ticket(this.bookingForm.value);
    var totalTicketsBooked: number;
    this.modalRef.hide();

    this.ticketService.getTicketsByShowId(this.showId).subscribe((data: Ticket[])=> {
      totalTicketsBooked = 0;
      data.forEach(ticket => totalTicketsBooked = totalTicketsBooked + ticket.noOfTicketsBooked);      
    });

    this.theaterService.getMovie(this.showId).subscribe(data => {
      if (totalTicketsBooked + ticket.noOfTicketsBooked <= data.noOfSeats) {
        ticket.showId = +this.showId;
        this.ticketService.bookTickets(ticket).subscribe(id => {
          this.route.navigate(['/home/viewTicket/' + id]);
          this.toastr.success('Booking successful')
        });
      }
      else {
        this.toastr.error("Booking failed seats not available");
      }
    });
  }
}
