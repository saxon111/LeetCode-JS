/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  const map = new Map();
  for (let i = 0; i < stones.length; i++) {
    map.set(stones[i], new Set());
  }
  map.get(0).add(0);
  for (let i = 0; i < stones.length; i++) {
    let cur = map.get(stones[i]);
    for (let k of cur) {
      for (let step = k - 1; step <= k + 1; step++) {
        if (step > 0 && map.has(stones[i] + step)) {
          map.get(stones[i] + step).add(step);
        }
      }
    }
  }
  return map.get(stones[stones.length - 1]).size > 0;
};
