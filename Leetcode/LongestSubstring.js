// var lengthOfLongestSubstring = function (s) {
//   var output = [];
//   for (let i = 0; i < s.length; i++) {
//     output.push(s[i]);
//     for (let j = i + 1; j < s.length; j++) {
//       for (let k = i + 1; k < output.length; k++) {
//         if (output[k] !== s[j]) {
//           output.push(s[j]);
//           break;
//         }
//       }
//     }
//   }
//   return output;
// };
// var s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s));
var lengthOfLongestSubstring = function (s) {
  var count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (!(s[i] === s[j])) {
        console.log(s[i]);
      }
    }
  }
  return count;
};
var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
