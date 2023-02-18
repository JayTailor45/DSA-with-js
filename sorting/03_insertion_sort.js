const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let count = i;
    while (count >= 1) {
      if (array[count] < array[count - 1]) {
        [array[count], array[count - 1]] = [array[count - 1], array[count]]; // <- short hand to swap values
      }
      count--;
    }
  }
}

console.log(numbers);
insertionSort(numbers);
console.log(numbers);
