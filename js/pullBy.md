# pullBy

根据给定的迭代器函数，对原始数组进行突变以滤除指定的值。

- 检查提供的最后一个参数是否为函数。
- 使用`Array.prototype.map（）`将迭代器函数 fn 应用于所有数组元素。
- 使用`Array.prototype.filter（）`和`Array.prototype.includes（）`提取不需要的值。
- 设置`Array.prototype.length`可以通过将其长度重置为`0`来改变数组中传递的内容。
- 使用`Array.prototype.push（）`仅使用提取的值重新填充它。

```js
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == "function" ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map((val) =>
    fn(val)
  );
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
};
EXAMPLES;
var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], (o) => o.x); // myArray = [{ x: 2 }]
```
