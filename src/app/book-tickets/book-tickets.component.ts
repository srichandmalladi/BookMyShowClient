import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie_Theatre } from '../model/movie_theatre.model';
import { TheatreService } from '../services/theatre.service';
import { TicketService } from '../services/ticket.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.sass']
})
export class BookTicketsComponent implements OnInit {

  showId: string;
  movie: Movie_Theatre;
  NoOfTickets: number;
  Slot: number;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    private route: ActivatedRoute,
    private theaterService: TheatreService,
    private ticketService: TicketService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.showId = param['showId'];
      }
    );
    this.theaterService.getMovie(this.showId).subscribe(data => {
      this.movie = data;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  range() {
    var li: Number[] = [];
    for (var j = 1; j <= this.movie.slot; j++) {
      li.push(j);
    }
    return li;
  }
  bookTicket(): void {
    this.modalRef.hide();
    this.ticketService.booktickets(this.showId, this.NoOfTickets, this.Slot);
  }
}
