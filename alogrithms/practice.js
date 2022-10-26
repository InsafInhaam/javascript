//numbers = [1, 3, 10, 50]
function sumNumbers(numbers) {
  let total = 0; //1

  for (let i = 0; i < numbers.length; i++) {
    //1
    total += numbers[i]; //4=>n
  }
  return total; //1

  // return numbers.reduce((sum, curNum) => sum + curNum, 0);
}

// T = 1 + 1 + 1 + n + n = 3 + 2n = 3 + 2*n
// T = 2*n
// T = n => O(n) => Linear Time Complexity

console.log(sumNumbers([1, 3, 10, 50]));
