class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def check(L, R):
            if not L and not R:
                return True
            if not L or not R or L.val != R.val:
                return False
            return check(L.left, R.right) and check(L.right, R.left)
        return check(root, root)
