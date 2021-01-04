var minNumber = function (nums) {
  const fastsort = (arr, start, end) => {
    if (start >= end) {
      return;
    }
    let left = start,
      right = end;
    const pivot = arr[(start + end) >> 1];
    while (left <= right) {
      while (left <= right && arr[left] + pivot < pivot + arr[left]) {
        left++;
      }
      while (left <= right && arr[right] + pivot > pivot + arr[right]) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    fastsort(arr, start, right);
    fastsort(arr, left, end);
  };
  const strNums = nums.map((i) => String(i));
  fastsort(strNums, 0, strNums.length - 1);
  return strNums.join("");
};
