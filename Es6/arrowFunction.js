// const xyz = () => {
//   console.log("SXYZ", this);
// };
// console.log("Here", this);

let arr = [1, 2, 4, 5, 6];
console.log(arr.map((elem) => 2 * elem));

const retObj = (uname, age) => ({ uname: uname, age: age });
console.log(retObj("rijan", 25));

const addTwoNumber = (num1, num2) => num1 + num2;
console.log(addTwoNumber(1, 2));
