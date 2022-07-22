const arr = [2, 5, 5, 2, 3, 4, 6];

function firstRecurringCharacter(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
}

console.log(firstRecurringCharacter(arr));
