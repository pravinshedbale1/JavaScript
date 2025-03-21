function printMe(person) {
  console.log(
    `Name: ${person.firstName} ${person.lastName} \nJob: ${person.job}`
  );
}
let person = {
  firstName: "John",
  lastName: "Doe",
  job: "Software Engineer",
};
printMe(person);
