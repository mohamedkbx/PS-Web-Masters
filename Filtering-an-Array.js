function filterEvenNumbers(arr) {
  // return even nums
  return arr.filter((num) => num % 2 === 0);
}

// Test Case
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);
