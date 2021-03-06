export class TicketView {
  userId: string;
  title: string;
  name: string;
  date: Date;
  noOfTicketsBooked: number;
  slot: number;
  constructor(args: any) {
    this.userId = args.userId;
    this.title = args.title;
    this.name = args.name;
    this.date = args.date;
    this.noOfTicketsBooked = args.noOfTicketsBooked;
    this.slot = args.slot;
  }
}
