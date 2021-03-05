export class Show {
  showId: number;
  theatreId: number;
  movieId: number;
  slot: number;
  noOfTicketsBooked: number;
  constructor(args: any) {
    this.showId = args.showId;
    this.theatreId = args.theatreId;
    this.movieId = args.movieId;
    this.slot = args.slot;
    this.noOfTicketsBooked = args.noOfTicketsBooked;
  }
}
