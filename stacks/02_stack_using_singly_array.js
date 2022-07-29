class Stack {
  constructor() {
    this.arr = [];
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    if (this.arr.length) {
      this.arr.pop();
    } else {
      console.log(`The stack is already empty`);
    }
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

const myStack = new Stack();

myStack.isEmpty();

myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");

console.log(myStack.arr);

myStack.isEmpty();

console.log(myStack.peek());

myStack.pop();

console.log(myStack.peek());

console.log(myStack.arr);
