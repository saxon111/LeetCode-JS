// 解法一:双指针
var reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};

//递归
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const next = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return next;
};
