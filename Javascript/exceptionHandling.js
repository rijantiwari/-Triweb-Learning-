function validateUser(name, password) {
  try {
    if (name.length < 5) {
      throw new Error("User name is too short");
    }

    if (password.length < 6) {
      throw new Error("invalid password");
    }
    console.log("working");

    return "in try";
  } catch (error) {
    console.log(error);
    return "Fail in catch";
  } finally {
    console.log("Inside finally block");
    return "from finally";
  }
}

let name = "Rijan";
let password = "abcdefghijk";
let mgs = validateUser(name, password);
console.log("user", mgs);
