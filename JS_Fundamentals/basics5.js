let day = "Tuesday ";
console.log(day.length);
let subString = day.slice(0, 4);
console.log(subString);
console.log(day[1]);
//tue day
let splitDay = day.split("s");
console.log(splitDay[1]);
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);
diff.toString();

let newQuote = day + "is funday day";
console.log(newQuote);
let val = newQuote.indexOf("day", 5);
console.log(val);
