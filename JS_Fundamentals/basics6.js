//object is a collection of porperties, functions, and values
//properties are a key value pair
let person = {
  firstName: "Patrick",
  lastName: "Kelliher",
  age: 47,
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
console.log(person.fullName());
console.log(person.lastName);
console.log(person["lastName"]);
person.firstName = "John";
console.log(person.firstName);
person.gender = "male";
console.log(person);
console.log("gender" in person);
delete person.gender;
console.log(person);
console.log("gender" in person);
//print all the values of the JavaScript object.
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}
