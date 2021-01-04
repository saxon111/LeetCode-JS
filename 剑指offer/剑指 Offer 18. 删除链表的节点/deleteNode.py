# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        dummyNode = ListNode(0, head)
        cur, pre = head, dummyNode
        while cur.val != val:
            pre, cur = pre.next, cur.next
        pre.next, cur = cur.next, None
        return dummyNode.next
