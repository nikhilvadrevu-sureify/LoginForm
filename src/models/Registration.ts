import { User } from "../login";

export default class Register {
  private users: User[];

  constructor() {
    const data = localStorage.getItem("users");
    this.users = data ? JSON.parse(data) : [];
  }

  addUser(username: string, email: string, password: string) {
    this.users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  getUserIndex(username: string, password: string) {
    return this.users.findIndex(
      (user) => user.username === username && user.password === password
    );
  }
}
