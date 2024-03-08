# quickSort

使用`quicksort`算法对数字数组进行排序。

- 使用递归(recursion)
- 使用传播运算符（`...`）克隆原始数组`arr`。
- 如果数组的长度小于`2`，则返回克隆的数组。
- 使用`Math.floor（）`计算枢轴元素的索引。
- 使用`Array.prototype.reduce（）`和`Array.prototype.push（）`将数组分成两个子数组（元素小于或等于数据透视图，元素大于它），将结果分解为两个数组。
- 在创建的子数组上递归调用`quickSort（）`。

```js
const quickSort = arr => {
  const a = [...arr];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};
EXAMPLES
quickSort([1, 6, 1, 5, 3, 2, 1, 4]); // [1, 1, 1, 2, 3, 4, 5, 6]
```
