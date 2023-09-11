// Array Matching
let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;
[e, d, c, b, a] = [a, b, c, d, e];
console.log("First Element", a);
console.log("Second Element", b);

// short hand object matching, notation

function getObject() {
  let student = {
    name: "rijan",
    age: "31",
    level: "MCA",
  };
  return student;
}

var { name, age, level } = getObject();
console.log(getObject());
console.log(name, age, level);
