function findLargestNumber(arr) {
  let largest = arr[0]; // Assume the first element is the largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Test Case
const numbers = [3, 5, 7, 2, 8, 10, 4];
console.log(findLargestNumber(numbers));

// Time complexity : O(n)
// Space complexity : O(1)

// i used loop approach for better space complexity instead of Math.max cause it use more memory O(n)
// if we focus on code clarity we should use Math.max() function but it comes over space and if the arr is too large it will be a problem
// but the solution :
/*
 function findLargestNumber(arr) {
     return Math.max(...arr);
   }

  const numbers = [3, 5, 7, 2, 8, 10, 4];
  const largestNumber = findLargestNumber(numbers);
   console.log(largestNumber);
*/
