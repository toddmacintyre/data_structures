// impliment module pattern for namespacing

const Node = require('./linkedListNode.js');

class SinglyLinkedList {
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
      this.tail.next = node;
    }
    return this.tail = node;
  }

  removeHead() {
    if (this.head) {
      const temp = this.head;
      if (this.head.next) {
        this.head = this.head.next;
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
}

module.exports = SinglyLinkedList;

// let linkedList = new SinglyLinkedList(1);linkedList
// console.log(linkedList.addToTail(new Node(2)));
// console.log(linkedList.addToTail(new Node(3)));
// console.log(linkedList.addToTail(new Node(4)));
// console.log(linkedList.addToTail(new Node(5)));
// console.log(linkedList.removeHead());
// console.log(linkedList);

// console.log(linkedList.access(3));