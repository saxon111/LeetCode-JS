/**
 * @param {number} capacity
 */

class DListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hash = new Map();
    this.size = 0;
    this.dummyHead = new DListNode();
    this.dummyTail = new DListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    if (!this.hash.has(key)) {
      return -1;
    }
    const node = this.hash.get(key);
    this.moveToHead(node);
    return node.value;
  }

  put(key, value) {
    if (!this.hash.has(key)) {
      const newNode = new DListNode(key, value);
      this.hash.set(key, newNode);
      this.addToHead(newNode);
      this.size++;
      if (this.size > this.capacity) {
        const tail = this.removeTail();
        this.hash.delete(tail.key);
        this.size--;
      }
    } else {
      const node = this.hash.get(key);
      node.value = value;
      this.moveToHead(node);
    }
  }
  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }
  removeTail() {
    const res = this.dummyTail.prev;
    this.removeNode(res);
    return res;
  }
  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}
