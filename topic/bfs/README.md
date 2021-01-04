## BFS 广度优先搜索

#### 使用场景

- 连通块问题

  - 通过一个点找到图中连通的所有点
  - 非递归的方式找到所有方案

- 分层遍历

  - 图的层次遍历
  - 简单图最短路径

- 拓扑排序
  - 求任意拓扑序
  - 求是否有拓扑序
  - 求字典序最小的拓扑序
  - 求是否唯一拓扑序

#### 模板代码

```python
# python
# step 1 初始化
# 把初始节点放到deque中
queue = collections.deque([node])
distance = {node: 0}
while queue:
    node = queue.popLeft()
    for neighbor in node.get_neighbors():
        if neighbor in distance:
            continue
        distance[neighbor] = distance[node] + 1
        queue.append(neighbor)
```

```js
// JS
const bfs = (root) => {
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const len = queue.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;,
};
```
