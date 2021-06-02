/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  class UnionFind {
    constructor(n) {
      this.count = n;
      this.parent = new Array(n);
      for (let i = 0; i < n; i++) {
        this.parent[i] = i;
      }
    }
    find(p) {
      let root = p;
      while (this.parent[root] !== root) {
        root = this.parent[root];
      }
      while (this.parent[p] !== p) {
        let x = p;
        p = this.parent[p];
        this.parent[x] = root;
      }
      return root;
    }
    union(p, q) {
      const rootP = this.find(p);
      const rootQ = this.find(q);
      if (rootP === rootQ) return;
      this.parent[rootP] = rootQ;
      this.count--;
    }
  }
  const n = M.length;
  const unionFind = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        unionFind.union(i, j);
      }
    }
  }
  return unionFind.count;
};
