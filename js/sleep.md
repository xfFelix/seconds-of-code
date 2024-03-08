# sleep

延迟异步函数的执行。

- 通过使其进入睡眠状态并返回新的 `Promise（）` 来延迟执行异步功能的一部分。

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
EXAMPLES
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
