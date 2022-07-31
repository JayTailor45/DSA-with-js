class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.last) {
      const prevLast = this.last;
      prevLast.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (this.length) {
      if (this.first === this.last) {
        this.last = null;
      }
      const follower = this.first.next;
      this.first.next = null;
      this.first = follower;
      this.length--;
    } else {
      console.log("The Queue is already empty");
    }
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();

console.log(myQueue.isEmpty());

console.log(myQueue.peek());

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

console.log(myQueue.first);

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue.first);
console.log(myQueue.last);
