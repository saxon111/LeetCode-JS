var isSubStructure = function (A, B) {
  if (A === null || B === null) return false;
  const helper = (A, B) => {
    if (B === null) {
      return true;
    }
    if (A === null || A.val !== B.val) {
      return false;
    }
    return helper(A.left, B.left) && helper(A.right, B.right);
  };
  return (
    helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
};
