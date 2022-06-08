// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

function arrayContainsCommonItem1(a, b) {
  return a.some((ch) => b.includes(ch));
}

function arrayContainsCommonItem1(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        return true;
      }
    }
  }
  return false;
}
// O(a * b)
// O(1)

function containsCommonItem3(a1, a2) {
  // loop through first array and create object where properties === items in array
  const map = {};
  for (let i = 0; i < a1.length; i++) {
    if (!map[a1[i]]) {
      const item = a1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < a2.length; j++) {
    if (map[a2[j]]) {
      return true;
    }
  }
  return false;
}
// O(a + b)
// O(a)

// console.log(arrayContainsCommonItem1(array1, array2));
// console.log(arrayContainsCommonItem2(array1, array2));
console.log(containsCommonItem3(array1, array2));
