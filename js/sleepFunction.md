# How can I implement a sleep function in JavaScript?

JavaScript 没有自带 `sleep ()` 函数，考虑到它运行的环境以及如果使用不当可能会引起的麻烦，这可能是一个好主意。这种函数最接近的等价物是 setTimeout，但是还有其他一些不太常见的方法来实现一个函数，该函数将冻结当前线程一段指定的时间。

## setTimeout

JavaScript 的 `setTimeout` 设置一个计时器，它在计时器过期后执行一个函数或指定的代码片段。只有 `setTimeout` 回调中的代码会在计时器过期后执行，这可能会导致嵌套问题，如果不小心的话，还会导致代码执行失序。

```js
const printNums = () => {
  console.log(1);
  setTimeout(() => console.log(2), 500);
  console.log(3);
};

printNums(); // Logs: 1, 3, 2 (2 logs after 500ms)
```

## Synchronous version(同步版本)

虽然强烈建议不要使用 `Date.prototype.getTime ()` ，但是可以在 `While` 循环中使用 Date.prototype.getTime ()暂停执行一段时间。您可以像下面这样轻松地定义一个 synchronous `sleep ()` 函数:

```js
const sleepSync = (ms) => {
  const end = new Date().getTime() + ms;
  while (new Date().getTime() < end) { /* do nothing */ }
}

const printNums = () => {
  console.log(1);
  sleepSync(500);
  console.log(2);
  console.log(3);
};

printNums(); // Logs: 1, 2, 3 (2 and 3 log after 500ms)
```

## Asynchronous version(异步版本)

实现 `sleep ()` 函数的一种侵入性较小的方法是利用 `async` 并等待 JavaScript ES6、 Promise 和 setTimeout ()中添加的关键字。注意，结果函数必须在一个 `async` 函数中执行，并且必须使用 `await` 调用:

```js
const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

const printNums = async() => {
  console.log(1);
  await sleep(500);
  console.log(2);
  console.log(3);
};

printNums(); // Logs: 1, 2, 3 (2 and 3 log after 500ms)
```
