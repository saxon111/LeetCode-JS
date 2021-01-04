var validateStackSequences = function (pushed, popped) {
  const N = pushed.length;
  let j = 0;
  const stack = [];
  for (let num of pushed) {
    stack.push(num);
    while (stack.length > 0 && j < N && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }
  return j === N;
};
