const flag = true;

if (!flag) {
  console.log("condition satisfied");
} else {
  console.log("condition not satisfied");
}

let i = 0;

while (i < 10) {
  i++;
  console.log(i);
}

do {
  i++;
} while (i < 20);
console.log(1);

for (let k = 0; k <= 10; k++) {
  console.log(k);
}
//Run this when you know how many times you will need to loop.
let required = true;
while (required) {
  console.log(required);
  required = false;
}
//If true or false run while loop.
let n = 0;
for (k = 1; k <= 100; k++) {
  if (k % 2 == 0 && k % 5 == 0) {
    n++;
    console.log(k);
    if (n == 3) {
      break;
    }
  }
}
