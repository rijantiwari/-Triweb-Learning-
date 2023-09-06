let dayNum = 2;
// multiple Break
switch (dayNum) {
  case 1:
    console.log("Today is Sunday");
    break;

  case 2:
    console.log("Today is Monday");
    break;
  case 3:
    console.log("Today is Tuesday");
    break;
  case 4:
    console.log("Today is Wednesday");
    break;
  case 5:
    console.log("Today is Thursday");
    break;
  case 6:
    console.log("Today is Friday");
    break;
  case 5:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Enter Correct Number");
    break;
}
// Single Break
let leaveDay = 3;
switch (leaveDay) {
  case 1:
  case 2:
  case 6:
  case 5:
    break;
  case 3:
    console.log("Today is holiday ");
    break;
  default:
    console.log("Enter prop");
    break;
}
