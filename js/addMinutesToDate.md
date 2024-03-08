# addMinutesToDate

从给定日期计算`n`分钟的日期，并返回其字符串表示形式。

* 使用`new Date（）`从第一个参数创建日期对象。
* 使用`Date.prototype.getTime（）`和`Date.prototype.setTime（）`将`n`分钟添加到给定日期。
* 使用`Date.prototype.toISOString（）`，`String.prototype.split（）`和`String.prototype.replace（）`返回`yyyy-mm-dd HH：MM：SS`格式的字符串。

```js
const addMinutesToDate = (date, n) => {
  const d = new Date(date);
  d.setTime(d.getTime() + n * 60000);
  return d.toISOString().split('.')[0].replace('T',' ');
};
EXAMPLES
addMinutesToDate('2020-10-19 12:00:00', 10); // '2020-10-19 12:10:00'
addMinutesToDate('2020-10-19', -10); // '2020-10-18 23:50:00'
```
