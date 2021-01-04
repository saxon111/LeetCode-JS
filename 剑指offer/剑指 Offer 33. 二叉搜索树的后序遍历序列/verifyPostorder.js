// 解法一

var verifyPostorder = function (postorder) {
    const helper = (i, j) => {
        if (i >= j) {
            return true
        }
        let p = i
        while (postorder[p] < postorder[j]) {
            p++
        }
        const m = p
        while (postorder[p] > postorder[j]) {
            p++
        }
        return p === j && helper(i, m - 1) && helper(m, j - 1)
    }
    return helper(0, postorder.length - 1)

};

// 解法二
var verifyPostorder = function (postorder) {
    const stack = []
    let root = Infinity
    for (let i = postorder.length; i >= 0; i--) {
        if (postorder[i] > root) return false
        while (stack.length && stack[stack.length - 1] > postorder[i]) {
            root = stack.pop()
        }
        stack.push(postorder[i])
    }
    return true

};