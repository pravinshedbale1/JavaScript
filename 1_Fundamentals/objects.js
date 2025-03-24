// Ways of creating object in javascript

// 1. Object literal
const person = {
  name: "Pravin Shedbale",
  job: "Software Developer",
};
console.log(person);

// 2. Object constructor
function Developer(name, job) {
  this.name = name;
  this.job = job;
}
const developer = new Developer("Pravin Shedbale", "Software Engineer");
console.log(developer);

//3. ES6 class

class Engineer {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.getDeveloperProfile = function () {
      return `${this.name} is a ${this.job}`;
    };
  }
}

const engineer = new Engineer("Pravin Shedbale", "Software Engineer");
console.log(engineer.getDeveloperProfile());

//4. Object.create
const developer2 = Object.create(developer);
developer2.name = "Mayank Mishra";
developer2.job = "Frontend Developer";
console.log(developer2);
