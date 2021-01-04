/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  let i = s.length - 1,
    j = s.length - 1;

  const res = [];
  while (i >= 0) {
    while (i >= 0 && s[i] !== " ") {
      i--;
    }
    res.push(s.substring(i + 1, j + 1));
    while (i >= 0 && s[i] === " ") {
      i--;
    }
    j = i;
  }
  return res.join(" ");
};
