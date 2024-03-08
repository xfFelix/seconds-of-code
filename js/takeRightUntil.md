# takeRightUntil

从数组末尾删除元素，直到传递的函数返回`true`。返回移除的元素。

* 使用传播运算符（`...`）和`Array.prototype.reverse（）`创建数组的反向副本。
* 使用`Array.prototype.entries（）`上的`for ... of`循环遍历反向副本，直到该函数返回的值为真。
* 使用`Array.prototype.slice（）`返回删除的元素。
* 回调函数`fn`接受单个参数，它是元素的值。

```js
const takeRightUntil = (arr, fn) => {
  for (const [i, val] of [...arr].reverse().entries())
    if (fn(val)) return i === 0 ? [] : arr.slice(-i);
  return arr;
};
EXAMPLES
takeRightUntil([1, 2, 3, 4], n => n < 3); // [3, 4]
```
