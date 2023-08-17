"use strict";
const userdetails = document.getElementsByClassName("user-details")[0];
let users = localStorage.getItem("users") || "";
users = JSON.parse(users);
const UserDetails = document.getElementsByClassName("user-details")[0];
if (users && Array.isArray(users)) {
    users.map((user, index) => {
        const pNode = document.createElement("p");
        pNode.innerText = `${index + 1}. ${user.username}`;
        UserDetails.appendChild(pNode);
    });
}
