/**
 * Finds the first missing positive integer in an array.
 *
 * @param {number[]} nums - An array of integers.
 * @returns {number} The first missing positive integer.
 */
function firstMissingPositive(nums) {
    const n = nums.length;
  
    for (let i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
        [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
      }
    }

    //sort the array and then chec
  
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
  
    return n + 1;
  }
    
  console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
  console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1
  console.log(firstMissingPositive([1, 1])); // Output: 2
  console.log(firstMissingPositive([1, 2, 3, 4])); // Output: 5
  console.log(firstMissingPositive([])); // Output: 1
  console.log(firstMissingPositive([-5])); // Output: 1