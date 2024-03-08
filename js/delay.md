# delay

## 延时

ms毫秒后调用提供的功能。

* 使用`setTimeout（）`延迟执行`fn`。
* 使用`spread（...）`运算符可为函数提供任意数量的参数。

```js
const delay = (fn, ms, ...args) => setTimeout(fn, ms, ...args);
EXAMPLES
delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
); // Logs 'later' after one second.
```
