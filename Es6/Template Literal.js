function printData(fname, lname, age) {
  let added =
    " Your name is " + fname + " " + lname + " and your age is " + age;
  console.log("old method", added);
  let templateLiterals = `Your name is ${fname} ${lname} and your age is ${age}`;
  console.log(" New Method: ", templateLiterals);
}
let fname = "Rijan";
let lname = "Tiwari";
let age = 12;

printData(fname, lname, age);
