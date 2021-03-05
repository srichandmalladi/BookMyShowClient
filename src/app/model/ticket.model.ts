export class Ticket{
  userId: string;
  showId: string;
  noOfTicketsBooked: string;
  slot: number;
  constructor(args) {
    this.userId = args.userId;
    this.showId = args.showId;
    this.noOfTicketsBooked = args.noOfTicketsBooked;
    this.slot = args.slot;
  }
}
