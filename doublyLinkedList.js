const SingleNode = require('./linkedListNode.js');
const SinglyLinkedList = require('./singlyLinkedList.js');

class Node extends SingleNode {
  constructor(value) {
    super(value);
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  addToTail(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
    }
    return this.tail = node;
  }

  addToHead(value) {
    const node = new Node(value);
    if (!this.tail) {
      this.tail = node;
    }
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    }
    return this.head = node;
  }

  removeTail() {
    if (this.tail) {
      const temp = this.tail;
      if (this.tail.prev) {
        const prev = this.tail.prev;
        prev.next = null;
        this.tail = prev;
        return temp;
      }
      this.head = null;
      this.tail = null;
      return temp;
    }
  }

  removeHead() {
    if (this.head) {
      const temp = this.head;
      if (this.head.next) {
        const next = this.head.next;
        next.prev = null;
        this.head = next;
        return temp;
      }
      this.head = null;
      this.tail = null;
      return temp;
    }
  }

  access(target, current = this.head) {
    console.log('+++++++++', current.value);
    if (!current) {
      return undefined;
    }
    if (target === current.value) {
      return current;
    }
    if (current.next) {
      return this.access(target, current.next);
    }
    return false;
  }

  // access() {
  //   Object.assign({}, SinglyLinkedList.prototype.access);
  // }
}

// Object.assign(DoublyLinkedList, SinglyLinkedList.access);

// DoublyLinkedList.prototype.access = Object.create(SinglyLinkedList.prototype.access);



let linkedList = new DoublyLinkedList(1);
console.log(linkedList.addToTail(2));
console.log(linkedList.addToTail(3));
console.log(linkedList.addToTail(4));
console.log(linkedList.addToTail(5));
console.log(linkedList.removeHead());
// console.log('++++++++++', linkedList.constructor);

console.log('a;lkashgksldfh');
console.log('+++++++++', linkedList.access(3));