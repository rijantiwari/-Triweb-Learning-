var x = 10;
var y = 100;
var z = 10;
if (x > y) {
  console.log("x is greater than y");
  if (x > z) {
    console.log("x is greater than all");
  } else {
    console.log("z is greater than all");
  }
} else {
  console.log("y is greater than x");
  if (y > z) {
    console.log("y is greater than all ");
  } else {
    console.log("z is greater than all ");
  }
}
