let input = 5;

const factorial = function (input) {
  if (input === 1) {
    return 1;
  }
  return input * factorial(input - 1);
};

console.log(factorial(input));
