//object is a collection of porperties
//properties are a key value pair
let person = {
  firstName: "Patrick",
  lastName: "Kelliher",
};

console.log(person.lastName);
console.log(person["lastName"]);
person.firstName = "John";
console.log(person.firstName);
person.gender = "male";
console.log(person);
delete person.gender;
console.log(person);
