/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res;
  const inOrder = (root) => {
    if (!root || k == 0) {
      return;
    }
    inOrder(root.right);
    k--;
    if (k === 0) {
      res = root.val;
      return;
    }
    inOrder(root.left);
  };

  inOrder(root);
  return res;
};
