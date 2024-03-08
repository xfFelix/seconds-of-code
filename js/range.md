# Using JavaScript generator functions for ranges

## 对range 使用 JavaScript generate 函数

**Generator functions**

`JavaScript ES6 generators`允许您定义可以退出和以后重新输入的函数，同时保留它们的上下文(变量绑定)。它们使用 `function *` (关键字后跟星号)定义，并使用 `yield` 表达式返回结果。例如:

```js
function* generateRange(end, start = 0, step = 1) {
  let x = start - step;
  while(x < end - step) yield x += step;
}

const gen5 = generateRange(5);
let x = gen5.next();

while (!x.done) {
  console.log(x.value);
  x = gen5.next();
} // Logs: 0, 1, 2, 3, 4
```

在上面的例子中，我们定义了一个generate函数 generateRange，它将在开始和结束之间返回每个值，每次递增一个值。我们使用生成器对象调用 `Generator.prototype.next ()` ，直到它返回`{ value: undefined，done: true }`来迭代生成器生成的值。

**Symbol.iterator**

`Symbol.iterator`指定对象的默认迭代器。经常使用生成器函数实现 `Symbol.iterator`。例如:

```js
const iterableXx = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
  }
};

console.log([...iterableX]); // [1, 2]
```

正如您在本例中看到的，通过将生成器函数分配给其 `Symbol.iterator` 属性，使对象成为可迭代的。如果您希望迭代某些任意数据，或者创建一个可迭代的对象，并在引擎盖下使用生成器函数，那么这种方法尤其方便。

**Putting it all together**

了解了这两个概念是如何工作的，我们可以将它们组合起来创建一个范围生成器，类似于 Python 或 Ruby 的范围:

```js
const range = (end, start = 0, step = 1) => {
  function* generateRange() {
    let x = start - step;
    while(x < end - step) yield x += step;
  }
  return {
    [Symbol.iterator]: generateRange
  };
}

console.log([...range(7)]); // [0, 1, 2, 3, 4, 5, 6]
for (let i of range(8, 2, 2)) console.log(i); // Logs: 2, 4, 6
```
