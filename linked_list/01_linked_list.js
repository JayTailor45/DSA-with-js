// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    if (index >= this.length) {
      console.log("Index out of bounds");
    }

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // 1 -> 10 -> 5 -> 16
    // 1 -> 10 -> 99 -> 5 -> 16

    // if index is greater than length of the linked list, just append an item
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const temp = leader.next;
    leader.next = newNode;
    newNode.next = temp;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // if index is greater than length of the linked list, just append an item
    if (index >= this.length) {
      console.log("Invalid index");
    }

    const leader = this.traverseToIndex(index - 1);
    const temp = leader.next;
    leader.next = temp.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (this.length === 1) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());