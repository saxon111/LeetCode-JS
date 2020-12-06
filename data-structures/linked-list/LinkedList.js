import LinkedListNode from "./LinkedListNode";

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new LinkedListNode(value);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return this;
  }
  insert(postion, value) {
    if (postion >= 0 && postion <= this.length) {
      const node = new LinkedListNode(value);
      let current = this.head;
      let previous = null;
      let index = 0;
      if (postion === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        while (index < postion) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
      }

      this.length++;
      return true;
    }
    return false;
  }
  removeIndex(postion) {
    //检查越界
    if (postion > -1 && postion < this.length) {
      let current = this.head;
      let previous = null;
      let index = 0;
      if (postion === 0) {
        this.head = current.next;
      } else {
        while (index < postion) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.value;
    }
    return null;
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (value === current.value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  removeVal(value) {
    const index = this.findIndex(value);
    return this.removeIndex(index);
  }
  isEmpty() {
    return !this.length;
  }
  size() {
    return this.length;
  }
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `${current.value}`;
      current = current.next;
    }
    return string;
  }
}

let node = new LinkedList();
node.append(1);
node.append(2);
node.insert(0, 3);
node.insert(2, 4);
console.log(node, node.length);
