class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BST(value);
    let currentNode = this;

    while (true) {
      if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (newNode.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }

  contains(value) {
    let currentNode = this;
    let result = false;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        result = true;
        currentNode = null;
        break;
      }
    }

    return result;
  }

  remove(value) {
    return this;
  }
}

const bst = new BST(10);

bst.insert(22);
bst.insert(15);
bst.insert(13);
bst.insert(14);

// console.log(bst.contains(17));
console.log(JSON.stringify(bst));
