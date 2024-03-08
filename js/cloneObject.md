# How do I clone an object in JavaScript?

## 如何在 JavaScript 中克隆对象？

javascript的基本数据类型，比如数字、字符串、 null、未定义和布尔值是不变的，这意味着它们的值一旦创建就不会改变。但是，对象和数组是可变的，允许在创建后更改它们的值。实际上，这意味着原语是通过值传递的，而对象和数组是通过引用传递的。考虑下面的例子:

```js
let str = 'Hello';
let copy = str;
copy = 'Hi';
// str = 'Hello', copy = 'Hi'

let obj = { a: 1, b: 2 };
let objCopy = obj;
objCopy.b = 4;
// obj = { a: 1, b: 4}, objCopy = { a: 1, b: 4 }
```

在 `obj` 中发生的情况是，对象通过引用 `objCopy` 传递，因此改变其中一个变量的值也会影响另一个变量。`objCopy` 实际上是引用同一对象的别名。我们可以通过克隆对象来解决这个问题，可以使用各种技术，比如使用空对象的` spread 操作符(...)`或 `Object.assign ()` :

```js
let obj = { a: 1, b: 2};
let clone = { ...obj };
clone.b = 4;
// obj = { a: 1, b: 2}, clone = { a: 1, b: 4 }

let otherClone = Object.assign({}, obj);
otherClone.b = 6;
clone.b = 4;
// obj = { a: 1, b: 2}, otherClone = { a: 1, b: 6 }
```

这两个解决方案都展示了一个浅层克隆的例子，因为它们适用于外部(浅层)对象，但是如果我们有嵌套(深层)对象，这些对象最终将通过引用传递，那么它们就会失败。像往常一样，有几种方法可以解决这个问题，比较简单的方法是使用 `JSON.stringify ()`和 `JSON.parse ()`来处理这种情况:

```js
let obj = { a: 1, b: { c: 2 } };
let clone = JSON.parse(JSON.stringify(obj));
clone.b.c = 4;
// obj = { a: 1, b: { c: 2 }}, clone = { a: 1, b: { c: 4 } }
```

虽然上面的示例可以正常工作，但是它必须序列化和反序列化整个对象，这会显著影响代码的性能，因此它可能不适用于较大的对象或者性能很重要的项目。

或者，您可以使用递归函数深度克隆一个对象，并且速度快得多，例如 deepClone 代码片段中的函数。类似地，如果您想要一个可以随时使用的浅层克隆函数，您可以在浅层克隆代码片段中找到一个。
