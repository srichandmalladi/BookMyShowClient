export class User {
  userName: string;
  email: string;
  fullName: string;
  password: string;

  constructor(args: any) {
    this.userName = args.userName;
    this.email = args.email;
    this.fullName = args.fullName;
    this.password = args.passwords.password;
  }
}
