# heapsort

使用堆排序算法对数字数组进行排序。

- 使用递归
- 使用扩展运算符（`...`）克隆原始数组`arr`。
- 使用闭包来声明变量`l`和函数`heapify`。
- 将`for`循环和`Math.floor（）`与`heapify`结合使用，以从数组创建最大堆
- 使用`for`循环重复缩小所考虑的范围，并根据需要使用`heapify`和交换值以对克隆的数组进行排序。

```js
const heapsort = arr => {
  const a = [...arr];
  let l = a.length;

  const heapify = (a, i) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;
    if (left < l && a[left] > a[max]) max = left;
    if (right < l && a[right] > a[max]) max = right;
    if (max !== i) {
      [a[max], a[i]] = [a[i], a[max]];
      heapify(a, max);
    }
  };

  for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
  for (i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    l--;
    heapify(a, 0);
  }
  return a;
};
EXAMPLES
heapsort([6, 3, 4, 1]); // [1, 3, 4, 6]
```
