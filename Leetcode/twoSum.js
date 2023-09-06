var twoSum = function (nums, target) {
  var output = [];
  var result;
  outer: for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      var result = nums[i] + nums[j];
      if (result == target) {
        output.push(i);
        output.push(j);
        break outer;
      }
    }
  }
  return output;
};
var nums = [3, 2, 4];
var target = 6;
console.log(twoSum(nums, target));
