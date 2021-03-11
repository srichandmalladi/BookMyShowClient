export class Show {
  id: number;
  theatreId: number;
  movieId: number;
  slot: number;

  constructor(args: any) {
    this.id = args.id;
    this.theatreId = +args.theatreId;
    this.movieId = +args.movieId;
    this.slot = +args.slot;
  }
}
