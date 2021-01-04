class Heap {
  constructor(list = [], comparator) {
    this.list = list;
    if (typeof comparator !== "function") {
      this.comparator = function comparator(inserted, compared) {
        return inserted < compared;
      };
    }else {
        this.comparator = comparator
    }
    this.init()
  }
  heapify(arr, size ,i) {
    let largest = i
    const left = Math.floor(i * 2 + 1)
    const right = Math.floor(i * 2 + 2)
    if (left < size && this.comparator(arr[largest], arr[left])) {
        largest = left

    }
    if (right < size && this.comparator(arr[largest], arr[right])) {
        largest = right
    }
    if (largest !== i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]]
        this.heapify(arr, size, largest)
    }
  }
  init() {
      const size = this.size()
      for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
          this.heapify(this.list, size, i)
      }
  }
  inset(n) {
      this.list.push(n)
      const size = this.size()
      for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
          this.heapify(this.list, size, i)
      }

  }
  peek() {
      return this.list[0]
  }
  pop() {
      const last = this.list.pop()
      if (this.size() === 0) return last
      const returnItem = this.list[0]
      this.list[0] = last
      this.heapify(this.list, this.size(), 0)
      return returnItem
  }
  size() {
      return this.list.length
  }
}
