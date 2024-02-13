class Person {
  age = 25;
  get location() {
    return "SF Bay Area";
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }
}

let person = new Person("Patrick", "Kelliher");
console.log(person.age);
console.log(person.location);
console.log(person.fullName());
