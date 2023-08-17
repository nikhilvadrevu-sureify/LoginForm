export default class Register {
    users;
    constructor() {
        const data = localStorage.getItem("users");
        this.users = data ? JSON.parse(data) : [];
    }
    addUser(username, email, password) {
        this.users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(this.users));
    }
    getUserIndex(username, password) {
        return this.users.findIndex((user) => user.username === username && user.password === password);
    }
}
