const firstName = "Pravin";
const lastName = "Shedbale";
const birthYear = 1999;
const currentYear = 2025;
const job = "Software Engineer";

// Normal way
const pravin =
  "I'm " +
  firstName +
  " " +
  lastName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";

console.log(pravin);

// Template literals
const pravinNew = `I'm ${firstName} ${lastName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(pravinNew);
