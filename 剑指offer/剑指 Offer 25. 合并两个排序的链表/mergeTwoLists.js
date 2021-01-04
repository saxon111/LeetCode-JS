// 递归
var mergeTwoLists = function (l1, l2) {
  if (l1 === null || l2 === null) {
    return l1 === null ? l2 : l1;
  }
  const node = l1.val > l2.val ? l2 : l1;
  node.next = mergeTwoLists(node.next, node === l2 ? l1 : l2);
  return node;
};

//非递归
var mergeTwoLists = function (l1, l2) {
  const dummyNode = new ListNode(0);
  let pre = dummyNode;
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      pre.next = l2;
      l2 = l2.next;
    } else {
      pre.next = l1;
      l1 = l1.next;
    }
    pre = pre.next;
  }
  pre.next = l1 === null ? l2 : l1;
  return dummyNode.next;
};
