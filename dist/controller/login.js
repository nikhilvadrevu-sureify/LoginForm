import UserDetails from "../models/UserDetails.js";
const register = new UserDetails();
const form = document.querySelector('form[name="login"]');
if (form?.children.length) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.querySelector('input[name="email"]');
        const emailVal = email ? email.value : "";
        const password = document.querySelector('input[name="password"]');
        const passwordVal = password ? password.value : "";
        try {
            register.getUser(emailVal, passwordVal);
            window.location.href = "http://127.0.0.1:5500/src/views/userdetails.html";
        }
        catch (err) {
            const p = document.createElement("p");
            password.innerHTML = `user with email: ${emailVal} doesn/'t exist `;
            document.body.append(p);
        }
    });
}
