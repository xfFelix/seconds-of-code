# getDaysDiffBetweenDates

计算两个日期之间的差异（以天为单位）。

- 将两个 Date 对象相减并除以一天中的毫秒数，以得出它们之间的差（以天为单位）。

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
EXAMPLES;
getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")); // 9
```
