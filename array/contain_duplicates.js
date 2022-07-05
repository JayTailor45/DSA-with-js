/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/* 
Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// const nums = [1, 2, 3, 4];
// const nums = [1, 2, 3, 1];
// const nums = [2, 14, 18, 22, 22];

const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    for (let j = i; j < nums.length; j++) {
      if (current === nums[j + 1]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
