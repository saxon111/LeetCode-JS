var permuteUnique = function (nums) {
    const res = []
    nums.sort((a, b) => a - b)
    const hash = new Array(nums.length).fill(false)
    const helper = (combine) => {
        if (combine.length === nums.length) {
            res.push(combine.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (hash[i] || (i > 0 && nums[i] === nums[i - 1] && !hash[i - 1])) {
                continue
            }
            combine.push(nums[i])
            hash[i] = true
            helper(combine)
            hash[i] = false
            combine.pop()
        }
    }

    helper([])
    return res
};