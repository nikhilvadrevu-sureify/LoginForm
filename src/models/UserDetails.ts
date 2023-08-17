import { User } from "../login";

export default class UserDetails {
  private users: User[];

  constructor() {
    const data = localStorage.getItem("users");
    this.users = data ? JSON.parse(data) : [];
  }

  getUserDetails() {
    return this.users;
  }

  getUserIndex(email: string, password: string) {
    return this.users.findIndex(
      (user) => user.email === email && user.password === password
    );
  }

  setUserDetails(user: User): User | Error {
    const { email, username, password, status } = user;
    const index = this.getUserIndex(email, password);
    if (index > -1) {
      throw Error("email already exists");
    } else {
      this.users.push({
        username,
        email,
        password,
        status,
      });
    }
    return user;
  }

  getUser(email: string, password: string): User | Error {
    const index = this.getUserIndex(email, password);
    if (index > -1) {
      return this.users[index];
    }
    throw Error("email doesn't exist");
  }

  deleteUser(email: string, password: string): string | Error {
    const index = this.getUserIndex(email, password);
    if (index > -1) {
      const { email } = this.users.splice(index, 1)[0];
      return email;
    }
    throw Error("email doesn't exist");
  }

  //   getthis.userstatus(
  //     email: string,
  //     password: string
  //   ): ActivityStatus | Error {
  //    try {
  //     const user: User | Error = getUser(email, password);
  //     return user;
  //    } catch(err) {
  //     return Error(err)
  //    }
  //   }
}
