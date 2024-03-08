# isBetweenDates

检查日期是否在其他两个日期之间。

- 使用大于（`>`）和小于（`<`）运算符检查日期是否在`dateStart`和`dateEnd`之间。

```js
const isBetweenDates = (dateStart, dateEnd, date) =>
  date > dateStart && date < dateEnd;
EXAMPLES;
isBetweenDates(
  new Date(2010, 11, 20),
  new Date(2010, 11, 30),
  new Date(2010, 11, 19)
); // false
isBetweenDates(
  new Date(2010, 11, 20),
  new Date(2010, 11, 30),
  new Date(2010, 11, 25)
); // true
```
