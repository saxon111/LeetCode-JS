// 递归

var isSymmetric = function (root) {
  const helper = (u, v) => {
    if (u === null && v === null) {
      return true;
    }
    if (!u || !v) {
      return false;
    }
    return (
      u.val === v.val && helper(u.left, v.right) && helper(u.right, v.left)
    );
  };
  return helper(root, root);
};

// 迭代
var isSymmetric = function (root) {
  if (!root) return true;
  const q = [];
  q.push(root);
  q.push(root);
  while (q.length > 0) {
    const u = q.shift();
    const v = q.shift();
    if (!u && !v) {
      continue;
    }
    if (!u || !v || u.val !== v.val) {
      return false;
    }
    q.push(u.left, v.right, u.right, v.left);
  }
  return true;
};
