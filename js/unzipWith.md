# unzipWith

创建一个元素数组，将`zip`产生的数组中的元素取消分组，并应用提供的功能。

- 使用`Math.max（）`，`Function.prototype.apply（）`来获取数组中最长的子数组，使用`Array.prototype.map（）`来使每个元素成为数组。
- 使用`Array.prototype.reduce（）`和`Array.prototype.forEach（）`将分组的值映射到单个数组。
- 使用`Array.prototype.map（）`和扩展运算符（`...`）将`fn`应用于每个单独的元素组。

```js
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));
EXAMPLES
unzipWith(
  [
    [1, 10, 100],
    [2, 20, 200],
  ],
  (...args) => args.reduce((acc, v) => acc + v, 0)
);
// [3, 30, 300]
```
