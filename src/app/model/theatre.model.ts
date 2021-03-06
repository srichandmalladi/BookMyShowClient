export class Theatre {
  id: number;
  name: string;
  address: string;
  city: string;
  noOfSlots: number;
  noOfSeats: number;
  ticketCost: number;

  constructor(args: any) {
    this.id = args.id;
    this.name = args.name;
    this.address = args.address;
    this.city = args.city;
    this.noOfSlots = args.noOfSlots;
    this.noOfSeats = args.noOfSeats;
    this.ticketCost = args.ticketCost;
  }
}
