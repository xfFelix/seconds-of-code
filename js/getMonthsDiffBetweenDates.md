# getMonthsDiffBetweenDates

计算两个日期之间的差异（以月为单位）。

- 使用`Date.prototype.getFullYear（）`和`Date.prototype.getMonth（）`计算两个`Date`对象之间的差异（以月为单位）。

```js
const getMonthsDiffBetweenDates = (dateInitial, dateFinal) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
      dateFinal.getMonth() -
      dateInitial.getMonth(),
    0
  );
EXAMPLES;
getMonthsDiffBetweenDates(new Date("2017-12-13"), new Date("2018-04-29")); // 4
```
