const quickSortHelp = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  let left = start,
    right = end;

  // 1. pivot:get value not index
  let pivot = arr[(start + end) >> 1];

  // 2. left <= right not left < right
  while (left <= right) {
    // 3. arr[left] < pivot not arr[left] <= pivot
    while (left <= right && arr[left] < pivot) {
      left++;
    }
    while (left <= right && arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  quickSortHelp(arr, start, right);
  quickSortHelp(arr, left, end);
};

const quickSort = (arr) => {
  if (!arr || arr.length === 0) {
    return;
  }

  quickSortHelp(arr, 0, arr.length - 1);
  return arr;
};

const arr = [1,4,3,2,54,0]
quickSort(arr)
console.log(arr)