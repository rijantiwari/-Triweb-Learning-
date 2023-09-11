// Default Parameter Values
function addTwoNumber(n1, n2) {
  return n1 + n2;
}
let sum1 = addTwoNumber(1, 2);
console.log("sum =", sum1);
let sum2 = addTwoNumber(1);
console.log("sum2 =", sum2);

// With Default Parameter
function addThreeNumber(n1, n2 = 0, n3 = 6) {
  return n1 + n2;
}
let sum3 = addThreeNumber(1);
console.log("sum3 =", sum3);
