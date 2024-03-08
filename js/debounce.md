# debounce

## 防抖

创建一个已废除的函数，该函数延迟调用所提供的函数，直到自上次调用该函数以来至少已经过了毫秒。

* 每次调用去抖动功能时，请使用`clearTimeout（）`清除当前的挂起超时，并使用`setTimeout（）`创建一个新的超时，该延迟将调用该函数的时间延迟到至少`ms`毫秒过去
* 使用`Function.prototype.apply（）`将此上下文应用于函数并提供必要的参数。
* 省略第二个参数`ms`，将以超时设置为默认值`0` ms。

```js
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
EXAMPLES
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms

const handleInput = debounce(() => {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
}, 250)
```

```js
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*} 时间戳写法，第三个参数为true时立即调用
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
```

> 注意：`防抖`和`节流`函数内部不能使用箭头函数（`=>`），会找不到`this`
