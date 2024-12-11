function reverseString(str) {
  return str.split("").reverse().join("");
}

// Test Case:
const input = "Mohamed";
const reversed = reverseString(input);
console.log(reversed);
