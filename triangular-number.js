let number = 9;

const triangularNumber = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + triangularNumber(n - 1);
};

console.log(triangularNumber(number));
