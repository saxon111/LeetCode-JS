const mergSortHelp = (arr, start, end, temp) => {
  if (start >= end) {
    return;
  }
  mergSortHelp(arr, start, (start + end) >> 1, temp);
  mergSortHelp(arr, ((start + end) >> 1) + 1, end, temp);
  merge(arr, start, end, temp);
};

const merge = (arr, start, end, temp) => {
    console.log('>>>>>>>',temp, arr)
  let mid = (start + end) >> 1;
  let leftIndex = start;
  let rightIndex = mid + 1;
  let index = leftIndex;

  while (leftIndex <= mid && rightIndex <= end) {
    if (arr[leftIndex] < arr[rightIndex]) {
      temp[index++] = arr[leftIndex++];
    } else {
      temp[index++] = arr[rightIndex++];
    }
  } 
  while (leftIndex <= mid) {
    temp[index++] = arr[leftIndex++];
  }
  while (rightIndex <= end) {
    temp[index++] = arr[rightIndex++];
  }

  for (let i = start; i <=end; i++) {
      arr[i] = temp[i]
  }
};

const mergSort = (arr) => {
  if (!arr || arr.length === 0) {
    return;
  }
  const temp = new Array(arr.length);
  mergSortHelp(arr, 0, arr.length - 1, temp);
  return arr;
};

console.log(mergSort([5,3,1,2,6,9,8]))