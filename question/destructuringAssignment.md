<!--
 * @Date: 2021-09-03 19:40:25
 * @LastEditors: felix
 * @LastEditTime: 2021-09-03 19:46:08
-->

# undefined is not iterable (cannot read property Symbol(Symbol.iterator))

`ES6` 开发报错 `object undefined is not iterable (cannot read property Symbol(Symbol.iterator))`

这样的错又时很难发现是怎么回事，遇到这样的错，要考虑 `ES6` 语法中的解构语法是否存在错误

常见的解构错误有：

```js
// err: 1
const arr = { name: "hello" };
const [var1, var2] = arr;

// err: 2
const a = null;
const [var1] = a;

// err: 3
const b = [12, 34];
const { a, b } = { ...b };
```

注意：`null == undefined`，所以 `null` 的情况和 `undefined` 的情况是很多时候相同的
