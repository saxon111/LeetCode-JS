/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
  class UnionFind {
    constructor(n) {
      this.count = n;
      this.parent = new Array(n).fill(0).map((e, i) => i);
    }
    find(p) {
      let root = p;
      while (root !== this.parent[root]) {
        root = this.parent[root];
      }
      while (p !== this.parent[p]) {
        let x = p;
        p = this.parent[p];
        this.parent[x] = root;
      }

      return root;
    }
    union(p, q) {
      const rootP = this.find(p);
      const rootQ = this.find(q);
      this.parent[rootP] = rootQ;
      this.count--;
    }
  }
  const n = source.length;
  const uf = new UnionFind(n);
  for (const [x, y] of allowedSwaps) {
    uf.union(x, y);
  }
  const map = {};
  source.forEach((value, index) => {
    const f = uf.find(index);
    if (!map[f]) {
      map[f] = {};
    }
    if (!map[f][value]) {
      map[f][value] = 1;
    } else {
      map[f][value]++;
    }
  });

  let res = 0;
  target.forEach((value, index) => {
    const f = uf.find(index);
    if (!map[f][value]) {
      res++;
    } else {
      map[f][value]--;
    }
  });
  return res;
};
