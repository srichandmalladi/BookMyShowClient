export class Movie_Theatre {

  movieId: number;
  title: string;
  imageUrl: string;
  genre: string;
  description: string;
  rating: number;
  showId: number;
  theatreId: number;
  name: string;
  slot: number;
  city: string;
  noOfSlots: number;
  noOfSeats: number;
  ticketCost: number;
  constructor(args: any) {
    this.movieId = args.movieId;
    this.title = args.title;
    this.imageUrl = args.imageUrl;
    this.genre = args.genre;
    this.description = args.description;
    this.rating = args.rating;
    this.showId = args.showId;
    this.theatreId = args.description;
    this.name = args.rating;
    this.slot = args.slot;
    this.city = args.city;
    this.noOfSlots = args.noOfSlots;
    this.noOfSeats = args.noOfSeats;
    this.ticketCost = args.ticketCost;
  }
}
