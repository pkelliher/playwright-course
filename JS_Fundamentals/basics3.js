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
