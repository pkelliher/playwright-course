var marks = Array(6);
let grades = Array(20, 40, 35, 12, 37, 100);

var marks = [20, 40, 35, 12, 37, 100];
console.log(marks[2]);
marks[3] = 14;
console.log(marks);
console.log(marks.length);
marks.push(65);
console.log(marks);
marks.pop();
console.log(marks);
marks.unshift(12);
console.log(marks);
console.log(marks.indexOf(100));
console.log(marks);
console.log(marks.includes(120));
submarks = marks.slice(2, 5);
console.log(submarks);
var sum = 0;
for (let i = 0; i < marks.length; i++) {
  // console.log(marks[i]);
  sum = sum + marks[i];
}
console.log(sum);

//reduce filter map
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);
var scores = [12, 13, 14, 16];
//create new array with only even numbers
var evenScores = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);
  }
}
console.log(evenScores);
let newFilterEventScores = scores.filter((score) => score % 2 == 0);
console.log(newFilterEventScores);
//map
let mappedArray = newFilterEventScores.map((score) => score * 3);
console.log(mappedArray);

let totalVal = mappedArray.reduce((sum, val) => sum + val, 0);
console.log(totalVal);

var scores1 = [12,13,14,16]

let sumValues = scores.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, val) => sum + val, 0);
console.log(sumValues);

