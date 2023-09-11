// Scoping

var a = [1, 2, 3, 4, 5];
for (let i = 0; i < addEventListener.length; i++) {
  let x = a[i];
}

{
  var n = 5;
  let x = 7;
  const y = 9;
}

console.log(n);
// console.log(x);
// console.log(y);
