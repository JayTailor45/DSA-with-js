/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
  const copyArray = nums.slice();
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = copyArray[i];
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [-1, -100, 3, 99];
rotate(arr, 3);
console.log(arr);
