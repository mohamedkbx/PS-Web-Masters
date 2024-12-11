function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
const numbers = [1, 1, 5, 6, 3, 2, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);

// Time complexity : O(n)
// Space complexity : O(n)
