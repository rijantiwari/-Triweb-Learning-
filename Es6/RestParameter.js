function passSomeNumber(num1, num2) {
  return num1 + num2;
}
let res = passSomeNumber(2, 3);
console.log(res);
function AddThreeNumber(num1, num2) {
  return num1 + num2;
}
let res3 = passSomeNumber(2, 3);
console.log(res3);

// Rest Parameters
function addNumbers(...numbers) {
  let sum = 0;
  numbers.forEach((e) => {
    sum += e;
  });
  return sum;
}

let res4 = addNumbers(2, 3, 3, 4, 6);
console.log(res4);
