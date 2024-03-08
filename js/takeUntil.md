# takeUntil

删除数组中的元素，直到传递的函数返回true。返回移除的元素。

* 使用`Array.prototype.entries（）`上的`for ... of`循环遍历该数组，直到该函数返回的值为真。
* 使用`Array.prototype.slice（）`返回删除的元素。
* 回调函数`fn`接受单个参数，它是元素的值。

```js
const takeUntil = (arr, fn) => {
  for (const [i, val] of arr.entries()) if (fn(val)) return arr.slice(0, i);
  return arr;
};
EXAMPLES
takeUntil([1, 2, 3, 4], n => n >= 3); // [1, 2]
```
