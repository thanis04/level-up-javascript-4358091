// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Thanis",
  [password]: "12345",
  age: 24
};

console.log(user.username);
console.log(user.password);