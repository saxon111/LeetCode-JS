const binarySearch1 = (nums, target) => {
  if (!nums || nums.length === 0) return -1;

  let start = 0,
    end = nums.length - 1;
  // 要点1: start + 1 < end
  while (start + 1 < end) {
    // 要点2:  start + (end - start) / 2;

    // java和C++ 最好写成 mid = start + (end - start) / 2
    // 防止在 start = 2^31 - 1, end = 2^31 - 1 的情况下出现加法 overflow
    let mid = start + ((end - start) >> 1);
    // 要点3: =, <, > 分开讨论，mid 既不加1 也不减1

    // 用 start + 1 < end 而不是 start < end 的目的是为了避免死循环
    // 在 first position of target 的情况下不会出现死循环
    // 但是在 last position of target 的情况下会出现死循环
    // 样例：nums=[1，1] target = 1
    // 为了统一模板，我们就都采用 start + 1 < end，就保证不会出现死循环
    // > , =, < 的逻辑先分开写，然后在看看 = 的情况是否能合并到其他分支里

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  // 要点4: 循环结束后, 单独处理start和end

  //因为上面的循环退出条件是 start + 1 < end
  // 因此这里循环结束的时候，start 和 end 的关系是相邻关系（1和2，3和4这种）
  // 因此需要再单独判断 start 和 end 这两个数谁是我们要的答案
  // 如果是找 first position of target 就先看 start，否则就先看 end
  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
};

// 递归写二分法
const binarySearch = (arr, start, end, target) => {
  if (start > end) {
    return -1;
  }

  let mid = (start + end) >> 1;
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] < target) {
    return binarySearch(arr, mid + 1, end, target);
  }
  return binarySearch(arr, start, mid - 1, target);
};

const findPosition = (arr, target) => {
  return binarySearch(arr, 0, arr.length - 1, target);
};

