import Register from "../models/Registration.js";

const register = new Register();
const form = document.querySelector('form[name="register"]');

if (form?.children.length) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]')  as HTMLInputElement;
    const usernameVal: string | null = username ? username.value : "";
    const email = document.querySelector('input[name="email"]') as HTMLInputElement;
    const emailVal: string | null = email ? email.value : "";
    const password = document.querySelector('input[name="password"]') as HTMLInputElement;
    const passwordVal: string | null = password ? password.value : "";
    if (usernameVal && emailVal && passwordVal) {
      register.addUser(usernameVal, emailVal, passwordVal);
      window.location.href = 'http://127.0.0.1:5500/src/views/userdetails.html'
    }
  });
}
