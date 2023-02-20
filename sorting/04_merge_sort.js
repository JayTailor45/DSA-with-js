const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  console.log("merge sort called with array", array);
  console.log("left", left);
  console.log("right", right);

  return merge(mergeSort(left), mergeSort(right));
}

// [4, 3, 1, 2]
// [4, 3] [1, 2]
// [4], [3], [1], [2]

function merge(left, right) {
  const arr = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      arr.push(left[indexLeft]);
      indexLeft++;
    } else {
      arr.push(right[indexRight]);
      indexRight++;
    }
  }
  return arr.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(numbers);
const answer = mergeSort(numbers);
console.log(answer);
