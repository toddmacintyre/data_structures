class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree extends Node {
  constructor(value) {
    super(value);
  }

  insert(node) {
    if (node.value < this.value) {
      if (this.left) {
        return this.insert.call(this.left, node);
      }
      this.left = node;
      return node;
    } else {
      if (this.right) {
        return this.insert.call(this.right, node);
      }
      this.right = node;
      return node;
    }
  }

  search(value, current = this) {
    if (value === current.value) {
      return current;
    }
    if (value < current.value) {
      if (current.left) {
        return this.search.call(this, value, current.left);
      }
      return false;
    }
    if (current.right) {
      return this.search.call(this, value, current.right);
    }
    return false;
  }

  BFS(value, current = this, queue) {

  }
}


let root = new binarySearchTree(5);

root.insert(new Node(3));
// console.log(root);
root.insert(new Node(2));
// console.log(root);
console.log(root.search(2));