# What is the ternary operator and how do I use it?

## 什么是三元运算符，我如何使用它？

JavaScript 的三元运算符(`?:`) ，又称条件运算符，用来代替 If判断语句，最常见的是转让。例如:

```js
// Code using if..else
let x;
if (someCondition) {
  x = 10;
} else {
  x = 20;
}

// Same result using the ternary operator
const x = someCondition ? 10 : 20;
```

从上面的例子可以看出，三元操作符比使用 `if..else` 语句要短，并允许我们将结果值赋给一个变量，前提是条件基本上是一行代码。一个有用的结果是，我们可以对隐式返回的箭头函数使用三元运算符:

```js
// Code using if..else
const conditionalX = (condition, x) => {
  if (condition) return x;
  else return x + 5;
}

// Same result using the ternary operator
const conditionalX = (condition, x) => condition ? x : x + 5;
```

但是请注意，通常不鼓励使用 `ESLint` 嵌套三元表达式，甚至不鼓励使用专门的规则来处理这种情况。此外，三元操作符是 `React` 开发人员的最爱，因为它允许在 `JSX` 代码中简单的条件渲染:

```js
const ItemListTitle = (count) => (
  <h3>Item list{ count ? (<span> - {count} items</span>) : '(Empty)'}<h3>
);
```

最后，您可能想知道为什么它被称为“`三元`”操作符。“`三进制`”这个词是基于 `n` 进制单词 setup，意思是一个有三个操作数的操作符(条件，表达式执行如果真实，表达式执行如果假)。
