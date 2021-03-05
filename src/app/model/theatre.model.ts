export class Theatre {
  theatreId: number;
  name: string;
  address: string;
  city: string;
  noOfSlots: number;
  noOfSeats: number;
  ticketCost: number;

  constructor(args: any) {
    this.theatreId = args.theatreId;
    this.name = args.name;
    this.address = args.address;
    this.city = args.city;
    this.noOfSlots = args.noOfSlots;
    this.noOfSeats = args.noOfSeats;
    this.ticketCost = args.ticketCost;
  }
}
