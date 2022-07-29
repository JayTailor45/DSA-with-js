class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this.top);
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      const oldNode = this.top;
      this.top = newNode;
      this.top.next = oldNode;
    }
    this.length++;
  }

  pop() {
    if (this.length) {
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      const nextLeader = this.top.next;
      this.top = nextLeader;
      this.length--;
    } else {
      console.log(`The stack is already empty`);
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.isEmpty();

myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");

myStack.isEmpty();

myStack.peek();

myStack.pop();

myStack.peek();
