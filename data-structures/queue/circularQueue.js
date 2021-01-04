class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.headIndex = 0;
    this.count = 0;
    this.capacity = k;
  }
  enQueue(value) {
    if (this.count === this.capacity) {
      return false;
    }
    this.queue[(this.headIndex + this.count) % this.capacity] = value;
    this.count++;
    return true;
  }
  deQueue() {
    if (this.count === 0) {
      return false;
    }
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count--;
    return true;
  }
  Front() {
    if (this.count === 0) {
      return -1;
    }
    return this.queue[this.headIndex];
  }
  Rear() {
    if (this.count === 0) {
      return -1;
    }
    return this.queue[(this.headIndex + this.count - 1) % this.capacity];
  }
  isEmpty() {
    return this.count === 0;
  }
  isFull() {
    return this.count === this.capacity;
  }
}
