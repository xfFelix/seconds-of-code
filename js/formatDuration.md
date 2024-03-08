# formatDuration

## 格式化时间戳

返回给定毫秒数的人类可读格式。

* 将`ms`除以适当的值以获得天(`day`)，小时(`hour`)，分钟(`minute`)，秒(`second`)和毫秒(`millisecond`)的适当值。
* 结合使用`Object.entries（）`和`Array.prototype.filter（）`可以仅保留非零值。
* 使用`Array.prototype.map（）`为每个值创建字符串，并将其适当地复数。
* 使用`String.prototype.join(',')`将值组合成一个字符串。

```js
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};
EXAMPLES
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574);
// '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```
