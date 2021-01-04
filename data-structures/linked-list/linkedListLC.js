class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.rear = null;
    this.len = 0;
  }
  get(index) {
    if (index < 0 || index > this.len - 1) {
      return -1;
    }
    let node = this.head;
    while (index > 0) {
      if (node.next === null) {
        return -1;
      }
      node = node.next;
      index--;
    }
    return node.val;
  }
  addAtHead(val) {
    const node = new ListNode(val);
    if (this.head === null) {
      this.rear = node;
    } else {
      node.next = this.head;
    }
    this.head = node;
    this.len++;
  }
  addAtTail(val) {
    const node = new ListNode(val);
    if (this.head === null) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.len++;
  }
  addAtIndex(index, val) {
    if (index <= 0) {
      return this.addAtHead(val);
    }
    if (this.len < index) {
      return;
    }
    if (this.len === index) {
      return this.addAtTail(val);
    }
    const newNode = new ListNode(val);
    let node = this.head;
    while (index > 1) {
      node = node.next;
      index--;
    }
    newNode.next = node.next;
    node.next = newNode;
    this.len++;
  }
  deleteAtIndex(index) {
    if (index < 0 || index > this.len - 1 || this.len === 0) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.len--;
      return;
    }

    let node = this.head;
    const rawIndex = index;
    while (index > 1) {
      node = node.next;
      index--;
    }
    if (rawIndex === this.len - 1) {
      this.rear = node;
      this.len--;
      return;
    }
    node.next = node.next.next;
    this.len--;
    return;
  }
}
