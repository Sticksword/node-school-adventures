var inputs = process.argv.slice(2);
var result = inputs.map((word) => word[0]).reduce((prevVal, elem) => prevVal + elem, "");
// reduce gets cumulative or concatenated value based on elements across array
// filter() removes unwanted values from array, not the same as reduce
console.log(result);
