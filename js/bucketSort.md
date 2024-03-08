# bucketSort

使用存储桶排序算法对数字数组进行排序。

- 使用`Math.min（）`，`Math.max（）`和扩展运算符（`...`）查找给定数组的最小值和最大值。
- 使用`Array.from（）`和`Math.floor（）`创建适当数量的存储桶（空数组）。
- 使用`Array.prototype.forEach（）`使用数组中的适当元素填充每个存储桶。
- 使用`Array.prototype.reduce（）`，扩展运算符（`...`）和`Array.prototype.sort（）`对每个存储桶进行排序并将其附加到结果中。

```js
const bucketSort = (arr, size = 5) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  );
  arr.forEach(val => {
    buckets[Math.floor((val - min) / size)].push(val);
  });
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};
EXAMPLES
bucketSort([6, 3, 4, 1]); // [1, 3, 4, 6]
```
