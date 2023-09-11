function getData() {
  let obj = {
    ename: "Rijan",
    salary: 10000,
    location: {
      city: "Kathmandu",
      street: "Bagbazar",
    },
  };
  return obj;
}

let {
  ename: employeeName,
  salary: EmplyeeSalary,
  location: { city: employeecity, street: employeestreet },
} = getData();
console.log(
  "employeeName : ",
  employeeName,
  "EmplyeeSalary : ",
  EmplyeeSalary,
  "Employee city:",
  employeecity,
  "Employee Street:",
  employeestreet
);
