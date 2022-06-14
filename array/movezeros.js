/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/

/*
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) {
    return;
  } else {
    let startIndexOfZero = nums.length - 1;
    let currentIndex = 0;
    while (currentIndex < nums.length - 1) {
      let current = nums[currentIndex];
      if (currentIndex >= startIndexOfZero) {
        break;
      }
      if (current === 0) {
        // if current is zero then shift array elements to left once
        shiftElementLeft(nums, currentIndex);
        // and add zero in the end
        nums[startIndexOfZero] = 0;
        // and inc/dec the zero element index
        startIndexOfZero--;
        // currentIndex--;
      }

      currentIndex++;
    }
  }
};

function shiftElementLeft(nums, currentIndex) {
  for (let i = 1; i < nums.length; i++) {
    if (i > currentIndex) {
      nums[i - 1] = nums[i];
    }
  }
}

const numbs = [0, 1, 0, 3, 12];
moveZeroes(numbs);
console.log(numbs);
