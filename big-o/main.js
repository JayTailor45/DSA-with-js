const nemo = ['nemo'];
const everyone = ['test', 'linda', 'mary', 'nemo'];

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo'){
            console.log('Found nemo!');
        }
    }
}

function logFirst(array) {
    console.log(array[0]); // O(1)
}

const boxes = [1, 2, 3, 4, 5]

function logFirstTwo(array) {
    console.log(array[0]); // O(1)
    console.log(array[1]); // O(1)
}


findNemo(everyone); // O(n) - liner time
logFirst(everyone); // O(1) - constant time
logFirstTwo(boxes); // O(2) - constant time