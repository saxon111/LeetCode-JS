# 解法一:
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        slow = fast = 0
        while fast < len(nums):
            if nums[fast] & 1:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1
            fast += 1
        return nums


# 解法二:
class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        left, right = 0 ,len(nums) - 1
        while left < right:
            if nums[left] & 1:
                left+=1
                continue
            if nums[right] & 1 == 0:
                right-=1
                continue
            nums[left], nums[right] = nums[right], nums[left]
            
        return nums