# throttle

## 节流

创建一个调用函数，该函数每等待毫秒最多调用一次所提供的函数

* 使用`setTimeout()`及`clearTimeout()`限制给定的方法`fn`
* 使用`Function.prototype.apply（）`将此上下文应用于函数并提供必要的参数。
* 使用`Date.now（）`跟踪上一次调用受限制的函数的时间。
* 使用`inThrottle`变量可防止在第一次执行`fn`和下一个循环之间出现竞争情况。
* 忽略第二个参数，`wait`，以将超时设置为默认值`0 ms`。

```js
const throttle = (fn, wait = 0) => {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

EXAMPLES
例子
window.addEventListener(
  'resize',
  throttle(function(evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimens
```

> 注意：`防抖`和`节流`函数内部不能使用箭头函数（`=>`），会找不到`this`