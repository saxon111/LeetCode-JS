var MaxQueue = function () {
  this.queue = [];
  this.dequeue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.dequeue.length > 0) {
    return this.dequeue[0];
  }
  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  while (
    this.dequeue.length > 0 &&
    this.dequeue[this.dequeue.length - 1] < value
  ) {
    this.dequeue.pop();
  }
  this.queue.push(value);
  this.dequeue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.queue.length === 0) {
    return -1;
  }
  if (this.queue[0] === this.dequeue[0]) {
    this.dequeue.shift();
  }
  return this.queue.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
