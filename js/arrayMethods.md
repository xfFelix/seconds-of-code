# 4 JavaScript Array methods you must know

## 4种必须知道的JavaScript数组方法

JavaScript数组具有非常健壮的API，提供了许多惊人的工具。 这是每个开发人员都应该知道的4种JavaScript数组方法：

**Array.prototype.map()**

`Array.prototype.map（）`通过将提供的转换应用于原始数组的每个元素来创建一个新数组。 结果是一个数组的长度与原始数组相同，并且根据提供的函数转换了元素。

```js
const arr = [1, 2, 3];
const double = x => x * 2;
arr.map(double); // [2, 4, 6]
```

**Array.prototype.filter()**

`Array.prototype.filter（）`通过使用过滤函数创建新数组，以仅保留基于该函数返回`true`的元素。 结果是一个等于或小于原始数组长度的数组，其中包含与原始数组相同元素的子集。

```js
const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.filter(isOdd); // [1, 3]
```

![](/images/js-array-methods.png)

**Array.prototype.reduce()**

`Array.prototype.reduce（）`根据减速器函数和初始值创建任何类型的输出值。 根据提供的`reducer`函数，结果可以是任何类型，例如整数，对象或数组。

```js
const arr = [1, 2, 3];

const sum = (x, y) => x + y;
arr.reduce(sum, 0); // 6

const increment = (x, y) => [...x, x[x.length - 1] + y];
arr.reduce(increment, [0]); // [0, 1, 3, 6]
```

**Array.prototype.find()**

`Array.prototype.find（）`返回匹配器函数返回`true`的第一个元素。 结果是原始数组中的单个元素。

```js
const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.find(isOdd); // 1
```
