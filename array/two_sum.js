/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/*
nums = [2,7,11,15], target = 9
nums = [3,2,4], target = 6
nums = [3,3], target = 6
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

const nums = [3, 3];
const target = 6;

console.log(twoSum(nums, target));
