var isValid = function (s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const base = "([{";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (base.includes(s[i])) {
      stack.push(s[i]);
      continue;
    }
    if (map[s[i]] !== stack.pop()) {
      return false;
    }
  }
  return true && stack.length === 0;
};
