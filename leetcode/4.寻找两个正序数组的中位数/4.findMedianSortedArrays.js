var findMedianSortedArrays = function (nums1, nums2) {
  const n = nums1.length + nums2.length;
  if (n % 2 === 0) {
    return (
      (findKth(nums1, 0, nums2, 0, n >> 1) +
        findKth(nums1, 0, nums2, 0, (n >> 1) + 1)) /
      2
    );
  }
  return findKth(nums1, 0, nums2, 0, (n >> 1) + 1);
};

var findKth = function (A, startOfA, B, startOfB, k) {
  if (startOfA >= A.length) {
    return B[startOfB + k - 1];
  }
  if (startOfB >= B.length) {
    return A[startOfA + k - 1];
  }
  if (k === 1) {
    return Math.min(A[startOfA], B[startOfB]);
  }
  const halfKthOfA =
    startOfA + (k >> 1) - 1 < A.length ? A[startOfA + (k >> 1) - 1] : Infinity;
  const halfKthOfB =
    startOfB + (k >> 1) - 1 < B.length ? B[startOfB + (k >> 1) - 1] : Infinity;

  if (halfKthOfA < halfKthOfB) {
    return findKth(A, startOfA + (k >> 1), B, startOfB, k - (k >> 1));
  }
  return findKth(A, startOfA, B, startOfB + (k >> 1), k - (k >> 1));
};
