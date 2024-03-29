# countWeekDaysBetween

计算两个日期之间的工作日。

- 使用`Array.from（）`构造一个长度等于`startDate`和`endDate`之间的天数的数组。
- 使用`Array.prototype.reduce（）`遍历数组，检查每个日期是否为工作日并递增计数。
- 使用`Date.prototype.getDate（）`和`Date.prototype.setDate（）`将每个循环的第二天更新`startDate`提前一天。
- 注意：不考虑法定假日。

```js
const countWeekDaysBetween = (startDate, endDate) =>
  Array.from({ length: (endDate - startDate) / (1000 * 3600 * 24) }).reduce(
    (count) => {
      if (startDate.getDay() % 6 !== 0) count++;
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
      return count;
    },
    0
  );
EXAMPLES;
countWeekDaysBetween(new Date("Oct 05, 2020"), new Date("Oct 06, 2020")); // 1
countWeekDaysBetween(new Date("Oct 05, 2020"), new Date("Oct 14, 2020")); // 7
```
