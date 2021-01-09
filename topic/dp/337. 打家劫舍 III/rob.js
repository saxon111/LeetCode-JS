/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const { current, next } = dp(root);

  return Math.max(current, next);
};

function dp(root) {
  if (!root) {
    return { current: 0, next: 0 };
  }

  const left = dp(root.left);
  const right = dp(root.right);
  const current = root.val + left.next + right.next;
  const next =
    Math.max(left.current, left.next) + Math.max(right.current, right.next);

  return { current, next };
}
