import UserDetails from "./models/UserDetails";

export type User = {
  username: string;
  email: string;
  password: string;
  status?: ActivityStatus;
};

enum ActivityStatus {
  loggedIn,
  loggedOut,
  blocked,
}

const userInfo = new UserDetails()

class Login {
  addUser(user: User) {
    userInfo.setUserDetails(user);
  }

  getUser(email: string, password: string): User | Error {
    return userInfo.getUser(email, password);
  }

  getUserStatus(email: string, password: string) {
    return userInfo.getUser(email, password);
  }

  deleteUser(email: string, password: string) {
    return userInfo.deleteUser(email, password);
  }
}

export default Login;
