export default class UserDetails {
    users;
    constructor() {
        const data = localStorage.getItem("users");
        this.users = data ? JSON.parse(data) : [];
    }
    getUserDetails() {
        return this.users;
    }
    getUserIndex(email, password) {
        return this.users.findIndex((user) => user.email === email && user.password === password);
    }
    setUserDetails(user) {
        const { email, username, password, status } = user;
        const index = this.getUserIndex(email, password);
        if (index > -1) {
            throw Error("email already exists");
        }
        else {
            this.users.push({
                username,
                email,
                password,
                status,
            });
        }
        return user;
    }
    getUser(email, password) {
        const index = this.getUserIndex(email, password);
        if (index > -1) {
            return this.users[index];
        }
        throw Error("email doesn't exist");
    }
    deleteUser(email, password) {
        const index = this.getUserIndex(email, password);
        if (index > -1) {
            const { email } = this.users.splice(index, 1)[0];
            return email;
        }
        throw Error("email doesn't exist");
    }
}
