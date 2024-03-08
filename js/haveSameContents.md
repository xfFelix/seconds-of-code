# haveSameContents

检查两个数组是否包含相同的元素，无论顺序如何。

- 在由两个数组的值创建的 Set 上使用 for ... of 循环。
- 使用`Array.prototype.filter（）`比较两个数组中每个不同值的出现量。
- 如果计数与任何元素都不匹配，则返回 false，否则返回 true。

```js
const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter((e) => e === v).length !== b.filter((e) => e === v).length)
      return false;
  return true;
};
EXAMPLES;
haveSameContents([1, 2, 4], [2, 4, 1]); // true
```
