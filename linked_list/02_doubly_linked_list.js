class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    // console.log(leader);
    // console.log(newNode);
    // console.log(follower);
    return this.printList();
  }

  remove(index) {
    // if index is greater than length of the linked list, just append an item
    if (index >= this.length) {
      console.log("Invalid index");
    }
    const leader = this.traverseToIndex(index - 1);
    const temp = leader.next;
    const follower = temp.next;
    leader.next = temp.next;
    follower.prev = leader;

    // console.log(leader);
    // console.log(leader.next);

    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
