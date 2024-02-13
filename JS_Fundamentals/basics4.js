function add(a, b) {
  return a + b;
}
sum = add(2, 3);
console.log(sum);

//do not have name => anonymous function = function expressions
let sumOfIntegers = function (c, d) {
  return c + d;
};
console.log(sumOfIntegers(3, 4));

//arrow function
let sumOfNumbers = (c, d) => c + d;
console.log(sumOfNumbers(3, 4));
