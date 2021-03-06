export class Ticket{
  id: number;
  userId: string;
  showId: number;
  date: Date;
  noOfTicketsBooked: number;
  slot: number;
  constructor(args) {
    this.userId = args.userId;
    this.showId = args.showId;
    this.date = args.date;
    this.noOfTicketsBooked = args.noOfTicketsBooked;
    this.slot = args.slot;
  }
}
