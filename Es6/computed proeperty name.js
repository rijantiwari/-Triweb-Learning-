let key = "new_key";
function ret() {
  return "Iloveprogramming";
}
let obj = {
  sname: "rijan",
  [key]: "Hello World",
  [key + 2 + ret()]: "yes",
};
console.log(obj);
