export class Movie {
  movieId: number;
  title: string;
  imageUrl: string;
  genre: string;
  description: string;
  rating: number;

  constructor(args: any) {
    this.movieId = args.movieId;
    this.title = args.title;
    this.imageUrl = args.imageUrl;
    this.genre = args.genre;
    this.description = args.description;
    this.rating = args.rating;
  }
}
