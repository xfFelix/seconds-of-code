# debouncePromise

## 防抖Promise化

创建一个已废除的返回承诺的函数，但是延迟调用所提供的函数，直到最后一次调用该函数之后至少毫秒。在此期间返回的所有承诺都将返回相同的数据。

* 每次调用去抖动功能时，请使用`clearTimeout（）`清除当前的挂起超时，并使用`setTimeout（）`创建一个新的超时，该延迟将调用该函数的时间延迟到至少`ms`毫秒过去。
* 使用`Function.prototype.apply（）`将此上下文应用于函数并提供必要的参数。
* 创建一个新的`Promise`，并将其`resolve`和`reject`回调添加到待处理的`Promise堆栈`中。
* 调用`setTimeout`时，复制当前堆栈（因为它可以在提供的函数调用及其分辨率之间进行更改），将其清除并调用提供的函数。
* 当提供的函数`resolve/reject`时，使用返回的数据解析/拒绝堆栈中的所有promise（在调用函数时复制）。
* 省略第二个参数ms，以将超时设置为默认值0 ms。

```js
const debouncePromise = (fn, ms = 0) => {
  let timeoutId;
  const pending = [];
  return (...args) =>
    new Promise((res, rej) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentPending = [...pending];
        pending.length = 0;
        Promise.resolve(fn.apply(this, args)).then(
          data => {
            currentPending.forEach(({ resolve }) => resolve(data));
          },
          error => {
            currentPending.forEach(({ reject }) => reject(error));
          }
        );
      }, ms);
      pending.push({ resolve: res, reject: rej });
    });
};
EXAMPLES
const fn = arg => new Promise(resolve => {
  setTimeout(resolve, 1000, ['resolved', arg]);
});
const debounced = debouncePromise(fn, 200);
debounced('foo').then(console.log);
debounced('bar').then(console.log);
// Will log ['resolved', 'bar'] both times
```

> 注意：`防抖`和`节流`函数内部不能使用箭头函数（`=>`），会找不到`this`
