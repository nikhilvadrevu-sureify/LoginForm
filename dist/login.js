import UserDetails from "./models/UserDetails";
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus[ActivityStatus["loggedIn"] = 0] = "loggedIn";
    ActivityStatus[ActivityStatus["loggedOut"] = 1] = "loggedOut";
    ActivityStatus[ActivityStatus["blocked"] = 2] = "blocked";
})(ActivityStatus || (ActivityStatus = {}));
const userInfo = new UserDetails();
class Login {
    addUser(user) {
        userInfo.setUserDetails(user);
    }
    getUser(email, password) {
        return userInfo.getUser(email, password);
    }
    getUserStatus(email, password) {
        return userInfo.getUser(email, password);
    }
    deleteUser(email, password) {
        return userInfo.deleteUser(email, password);
    }
}
export default Login;
