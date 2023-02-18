const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    let minVal = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = minVal;
  }
}

console.log(numbers);
selectionSort(numbers);
console.log(numbers);
