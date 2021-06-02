/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0;
  class UnionFind {
    constructor(grid) {
      this.count = 0;
      const m = grid.length;
      const n = grid[0].length;
      this.parent = [];
      this.rank = [];
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (grid[i][j] === "1") {
            this.parent.push(i * n + j);
            this.count++;
          } else {
            this.parent.push(-1);
          }
        }
      }
      this.rank.push(0);
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
      if (rootP === rootQ) return;
      if (this.rank[rootP] < this.rank[rootQ]) {
        [rootP, rootQ] = [rootQ, rootP];
      }
      this.rank[rootP] += this.rank[rootQ];
      this.parent[rootQ] = rootP;
      this.count--;
    }
  }
  const unionFind = new UnionFind(grid);
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = "0";
        if (i + 1 < m && grid[i + 1][j] === "1") {
          unionFind.union(i * n + j, (i + 1) * n + j);
        }
        if (i - 1 >= 0 && grid[i - 1][j] === "1") {
          unionFind.union(i * n + j, (i - 1) * n + j);
        }
        if (j + 1 < n && grid[i][j + 1] === "1") {
          unionFind.union(i * n + j, i * n + j + 1);
        }
        if (j - 1 >= 0 && grid[i][j - 1] === "1") {
          unionFind.union(i * n + j, i * n + j - 1);
        }
      }
    }
  }
  return unionFind.count;
};
