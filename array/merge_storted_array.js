const a = [0, 4, 8, 16, 25];
const b = [2, 3, 9, 18];

function mergeSortedArray(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function mergeSortedArray2(arr1, arr2) {
  const newSortedArray = [];

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (arr2Item === undefined || arr1Item < arr2Item) {
      newSortedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      newSortedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return newSortedArray;
}

function mergeSortedArray3(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeSortedArray(a, b));
console.log(mergeSortedArray2(a, b));
console.log(mergeSortedArray3(a, b));
