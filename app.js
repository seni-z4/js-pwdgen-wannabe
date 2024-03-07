"use strict";

let firstName = prompt("first name");
console.log(`First Name; ${firstName}`);

let lastName = prompt("last name");
console.log(`Last Name; ${lastName}`);

let color = prompt("color");
console.log(`Color; ${color}`);

let randomNumber = Math.floor(Math.random() * 99);

console.log(
  `your new password is; ${firstName}${lastName}${color}${randomNumber}`
);
