class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (this.root) {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
    }
    return false;
  }

  remove(value) {
    if (this.root) {
      while (currentNode) {
        let currentNode = this.root;
        let previousNode = null;
        // traverse until node to remove is found and store previous node in the process
        if (value < currentNode.value) {
          previousNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          previousNode = currentNode;
          currentNode = currentNode.right;
        } else if (value === currentNode.value) {
          // node to delete is found

          // if we don't have right child
          if (currentNode.right === null) {
            if (previousNode === null) {
              this.root = currentNode.left;
            } else {
              if (currentNode.value < previousNode.value) {
                previousNode.left = currentNode.left;
              } else if (currentNode.value > previousNode.value) {
                previousNode.right = currentNode.left;
              }
            }
          }

          // if we have right child which doesn't have a left child
          else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if (previousNode === null) {
              this.root = currentNode.right;
            } else {
              if (previousNode.value < currentNode.value) {
                previousNode.left = currentNode.right;
              } else if (previousNode.value > currentNode.value) {
                previousNode.right = currentNode.right;
              }
            }
          } else {
            // Find right child's left most child
            let leftMost = currentNode.right.left;
            let leftMostParent = currentNode.right;
            while (leftMost !== null) {
              leftMostParent = leftMost;
              leftMost = leftMost.left;
            }

            // Perent's left subtree is now left most's right subtree
            if (previousNode === null) {
              this.root = leftMost;
            } else {
              if (currentNode.value < previousNode.value) {
                previousNode.left = leftMost;
              } else if (currentNode.value > previousNode.value) {
                previousNode.right = leftMost;
              }
            }
          }
          return true;
        }
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }

  inOrderDFS() {
    return this.traverseInOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.traverseInOrder(node.right, list);
    }
    return list;
  }

  preOrderDFS() {
    return this.traversePreOrder(this.root, []);
  }

  traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    if (node.right) {
      this.traverseInOrder(node.right, list);
    }
    return list;
  }

  postOrderDFS() {
    return this.traversePostOrder(this.root, []);
  }

  traversePostOrder(node, list) {
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    if (node.right) {
      this.traverseInOrder(node.right, list);
    }
    list.push(node.value);
    return list;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.root);
// JSON.stringify(traverse(tree.root));

// console.log(tree.lookup(4));

// tree.remove(4);

//     9
//  4     20
//1  6  15  170

// console.log(tree.breadthFirstSearch());

// console.log(tree.breadthFirstSearchRecursive([tree.root], []));
console.log(tree.inOrderDFS());
console.log(tree.preOrderDFS());
console.log(tree.postOrderDFS());

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
