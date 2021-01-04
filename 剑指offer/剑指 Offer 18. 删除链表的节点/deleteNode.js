/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = head;
  let pre = dummy;
  while (cur.val !== val) {
    cur = cur.next;
    pre = pre.next;
  }
  pre.next = cur.next;
  cur.next = null;
  return dummy.next;
};
