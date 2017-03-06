const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let num = 0;
    return {
      next() {
        [num] = [num + 1]
        if (num <= max) return { done: false, value: fizzBuzz(num) };
        return { done: true };
      }
    }
  }
}

function fizzBuzz(num) {
  if (num % 5 === 0) {
    if (num % 3 === 0) {
      return "Fizzbuzz";
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
