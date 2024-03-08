# lastDateOfMonth

返回给定日期月份中最后一个日期的字符串表示形式。

- 使用`Date.prototype.getFullYear（）`，`Date.prototype.getMonth（）`可以从给定日期获取当前年份和月份。
- 使用`new Date（）`构造函数创建一个新日期，将给定的年份和月份加`1`，并将日期设置为`0`（上个月的最后一天）。
- 省略参数 date，以默认使用当前日期。

```js
const lastDateOfMonth = (date = new Date()) => {
  let d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return d.toISOString().split("T")[0];
};
EXAMPLES;
lastDateOfMonth(new Date("2015-08-11")); // '2015-08-30'
```
