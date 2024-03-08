# swapCase 大小写切换

创建一个字符串，将大写字符转换为小写，反之亦然

* 使用扩展运算符（`...`）将`str`转换为字符数组

* 使用`String.prototype.toLowerCase（）`和`String.prototype.toUpperCase（）`将小写字符转换为大写字符，反之亦然。

* 使用`Array.prototype.map（）`将转换应用于每个字符，使用`Array.prototype.join（）`组合回字符串。

* 注意，`swapCase（swapCase（str））=== str`不一定是正确的

```js
const swapCase = str =>
  [...str]
    .map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join('');
// EXAMPLES
swapCase('Hello world!'); // 'hELLO WORLD!'
```
