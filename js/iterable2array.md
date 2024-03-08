# How do I convert an iterable to an array in JavaScript?

## 如何将一个迭代转换为 JavaScript 中的数组？

JavaScript ES6引入了扩展运算符(`...`) ，它允许在需要零个或多个参数或元素的地方进行扩展。

我们可以使用 spread 操作符来转换迭代对象，或者像有时提到的那样，转换数组类似对象。让我们来看一些例子:

### String

当扩展运算符应用于字符串时，结果是一个字符串数组，每个字符代表原始字符串的一个字符:

```js
const name = 'Zelda';
const letters = [...name]; // 'Z', 'e', 'l', 'd', 'a'
```

### Set

集合是唯一值的集合。当扩展运算符应用于它时，结果是一个存储值数组:

```js
const data = [1, 2, 3, 1, 2, 4]
const values = new Set(data);
const uniqueValues = [...values]; // [1, 2, 3, 4]
```

注意，上面的示例是 `uniqueElements` 片段的基础。

### NodeList

NodeList 是一组节点，由 `document.childNodes ()`或 `document.querySelectorAll ()`等方法返回。虽然它实现了一些有助于将其作为数组进行操作的方法(例如 `NodeList.prototype.forEach ())` ，但通常希望将其转换为数组。当扩展运算符应用于它时，结果是一个包含节点的数组:

```js
const nodes = document.childNodes;
const nodeArray = [...nodes]; // [ <!DOCTYPE html>, html ]
```

注意，上面的示例是 `nodeListToArray` 代码片段的基础。
