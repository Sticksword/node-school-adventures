const PI = 3.141592;

const sqrt = function(s) {
  return sqrt_helper(s, s/2.0, 0.0);
};

function sqrt_helper(s, x, last) {
  return x != last ? sqrt_helper(s, (x + s / x) / 2.0, x) : x;
}

const square = function(x) {
  return x * x;
};

export default {
  PI,
  sqrt,
  square
};
