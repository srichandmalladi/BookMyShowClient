export class Movie {
  id: number;
  title: string;
  imageUrl: string;
  genre: string;
  description: string;
  rating: number;

  constructor(args: any) {
    this.id = args.id;
    this.title = args.title;
    this.imageUrl = args.imageUrl;
    this.genre = args.genre;
    this.description = args.description;
    this.rating = +args.rating;
  }
}
