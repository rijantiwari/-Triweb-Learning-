// Successfully initiation of the try block
try {
  let x = 5;
  console.log(x + x, ",Try initiated");
} catch (error) {
  console.log(error);
}

// Trying to catch the error
try {
  console.log(x + x, ",Try initiated");
  let x = 5;
} catch (error) {
  console.log(error);
}
