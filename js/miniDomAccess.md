# Minimize DOM access

## 最小化 DOM 访问

DOM 操作，包括访问 DOM，通常都很慢。这通常不是问题，直到您不得不执行许多 DOM 操作，并且 JavaScript 应用程序的性能开始受到影响。提高性能的一个非常快速的技巧是，如果您计划多次访问 DOM 元素，那么可以将它们或其值存储在本地变量中。

```js
// This is slow, it accesses the DOM element multiple times
document.querySelector('#my-element').classList.add('my-class');
document.querySelector('#my-element').textContent = 'hello';
document.querySelector('#my-element').hidden = false;

// This is faster, it stores the DOM element in a variable
const myElement = document.querySelector('#my-element');
myElement.classList.add('my-class');
myElement.textContent = 'hello';
myElement.hidden = false;
```

请注意，虽然这个技巧可能会派上用场，但是需要注意的是，如果您稍后删除了 DOM 元素，并且仍然将它存储在一个变量中，那么应该将该变量设置为 null，以避免潜在的内存泄漏。
