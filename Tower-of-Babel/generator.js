const max = process.argv[2];
let FizzBuzz = function*() {
  let num = 0;
  while (num < max) {
    [num] = [num + 1];
    yield fizzBuzz(num);
  }
}();

function fizzBuzz(num) {
  if (num % 5 === 0) {
    if (num % 3 === 0) {
      return "FizzBuzz";
    }
    return "Buzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  return num;
}

for (var n of FizzBuzz) {
  console.log(n);
}
