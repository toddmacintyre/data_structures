// impliment module pattern for namespacing

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.head = new QueueNode(value);
    this.tail = this.head;
  }

  enqueue(node) {
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    return this.tail = node;
  }

  dequeue() {
    if (this.head) {
      let temp = this.head;
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

// let queue = new Queue(1);
// console.log(queue.enqueue(new QueueNode(2)));
// console.log(queue.enqueue(new QueueNode(3)));
// console.log(queue.enqueue(new QueueNode(4)));
// console.log(queue.enqueue(new QueueNode(5)));
// console.log(queue.dequeue());
// console.log(queue);

// console.log(queue.access(6));