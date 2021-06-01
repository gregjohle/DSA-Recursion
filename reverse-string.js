let input = "zyxwvutsrqponmlkjihgfedcba";

const reverseString = function (string) {
  if (string.length === 1) {
    return string;
  }
  return string[string.length - 1] + reverseString(string.slice(0, -1));
};

console.log(reverseString(input));
