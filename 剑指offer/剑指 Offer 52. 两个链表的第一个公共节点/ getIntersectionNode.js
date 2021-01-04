/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let pos1 = headA;
  let pos2 = headB;
  while (pos1 && pos2) {
    pos1 = pos1.next;
    pos2 = pos2.next;
  }
  let k = 0;
  let flag = false;
  while (pos1) {
    pos1 = pos1.next;
    flag = true;
    k++;
  }

  while (pos2) {
    pos2 = pos2.next;
    k++;
  }
  pos1 = headA;
  pos2 = headB;

  while (pos1 !== pos2 && pos1 && pos2) {
    while (flag && k > 0) {
      pos1 = pos1.next;
      k--;
    }
    while (!flag && k > 0) {
      pos2 = pos2.next;
      k--;
    }
    if (pos1 === pos2) {
      return pos1;
    }
    pos1 = pos1.next;
    pos2 = pos2.next;
  }
  return pos1 === pos2 ? pos1 : null;
};


// 优化
var getIntersectionNode = function (headA, headB) {
    let pos1 = headA
    let pos2 = headB
    while (pos1 !== pos2) {
        pos1 = pos1 !== null ? pos1.next : headB
        pos2 = pos2 !== null ? pos2.next : headA
    }
    return pos1

};