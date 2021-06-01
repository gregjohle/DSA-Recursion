let integer = 10;
let exponent = 2;

const powerCalculator = function (integer, exponent) {
  if (exponent < 0) {
    console.log("exponent should be >= 0");
  } else if (exponent === 0) {
    return 1;
  }
  return integer * powerCalculator(integer, exponent - 1);
};

console.log(powerCalculator(10, 2));
