let num = 635482;
// var arr = [];
const arr = num.toString().split("");
var l = "";
var s = "";
const temp = arr;
console.log(arr);

const dec = arr.sort().reverse();
dec.map((num) => {
  return (l += num);
});
console.log("larger", l);

const output2 = temp.sort();
output2.map((num) => {
  return (s += num);
});
console.log("smaller", s);

//
