# Can I use an arrow function as the callback for an event listener in JavaScript?

## 我可以使用箭头函数（=>）作为事件监听器的回调吗？

**箭头函数(=>)**

JavaScript ES6引入了箭头函数的概念，这是定义和编写函数的新方法。 尽管它们看起来像是常规函数之上的语法糖，但它们之间的关键区别在于绑定此上下文的方式。 我不会在本文中进行详细介绍，但是我强烈建议您在继续之前阅读理解JavaScript中的“ this”关键字。 总结上述博客文章的详细解释：

> 箭头函数没有对于自己`this`的绑定，导致此保留了封闭词法上下文`this`的值。

**事件监听回调**

在编写浏览器端JavaScript时，我们经常执行的一项任务是创建事件监听器。 例如：

```js
const toggleElements = document.querySelectorAll('.toggle');
toggleElements.forEach(el => {
  el.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
```

在上面的示例中，我们使用`NodeList.prototype.forEach（）`遍历匹配给定选择器和`EventTarget.addEventListener（）`的节点，并使用常规函数作为 `click`事件的回调，以在活动状态和非活动状态之间进行交换 用于单击的元素。 当我们使用常规函数时，回调内的`this`上下文将绑定到触发事件的元素。

**箭头函数作为回调**

正如我们已经解释的那样，箭头函数对此没有自己的绑定。 那么，如果我们将以前的代码片段的回调转换为箭头函数会怎样？ 它的上下文指的是全局对象，在这种情况下是窗口对象。

```js
const toggleElements = document.querySelectorAll('.toggle');
toggleElements.forEach(el => {
  el.addEventListener('click', () => {
    this.classList.toggle('active'); // `this` refers to `window`
    // Error: Cannot read property 'toggle' of undefined
  });
});
```

由于`window`对象没有`classList`属性，因此只要单击匹配的元素，此代码就会引发错误，从而触发事件侦听器并执行回调。 但是，代码有时可能会静默地失败，因为它可能例如检查某个条件，该条件对于窗口始终评估为false，而对于给定元素则应评估为true，这会导致很多麻烦和浪费时间，直到发现并解决问题为止 。

为了解决这个问题，可以根据需要使用回调函数的第一个参数和`Event.target`或`Event.currentTarget`：

```js
const toggleElements = document.querySelectorAll('.toggle');
toggleElements.forEach(el => {
  el.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active'); // works correctly
  });
});
```
