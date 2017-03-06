var obj = {
  [(() => +process.argv[2] % 2 === 0 ? "even" : "odd")()]: +process.argv[2],
  [(() => +process.argv[3] + +process.argv[2])()]: +process.argv[3] + +process.argv[2]
}; // [expression or lambda function] -> is a computed property
console.log(obj);
