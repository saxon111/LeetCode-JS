// 解法一: 辅助栈
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }
  push(x) {
    this.stack.push(x);
    this.minStack.push(Math.min(x, this.minStack[this.minStack.length - 1]));
  }
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// 解法二: 不用辅助栈
class MinStack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }
  push(x) {
    if (this.length === 0) {
      this.stack.push([x, x]);
      this.length++;
      return;
    }
    this.stack.push([x, Math.min(x, this.stack[this.length - 1][1])]);
    this.length++;
  }
  pop() {
    this.stack.pop();
    this.length--;
  }
  top() {
    return this.stack[this.length - 1][0];
  }
  getMin() {
    return this.stack[this.length - 1][1];
  }
}

// 解法三: 存差值

class MinStack {
    constructor() {
        this.stack = []
        this.min = Infinity
    }
    push(x) {
        if (this.stack.length === 0) {
            this.stack.push(0)
            this.min = x
            return
        }
        const diff = x - this.min
        this.stack.push(diff)
        this.min = diff < 0 ? x : this.min
    }
    pop() {
        if (this.stack.length > 0) {
            const diff = this.stack.pop()
            let top;
            if (diff < 0) {
                top = this.min
                this.min = top - diff
            } else {
                top = diff + this.min

            }
            return top
        }

    }
    top() {
        const top = this.stack[this.stack.length - 1]
        return top < 0 ? this.min : top + this.min
    }
    getMin() {
        return this.min
    }
}