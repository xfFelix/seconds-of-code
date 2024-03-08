# getAfterMonthsByNum

- 根据数量往后推月份

```js
/**
 * 时间 月份向后推
 * @param date
 * @param num
 */
function getAfterMonthsByNum(date, num) {
  var dates = date.split("-");
  var year = dates[0] * 1;
  var month = dates[1] * 1;
  var i = 1;
  var result = [];
  result.push(dates[0] + "-" + dates[1]);
  while (i < num) {
    month++;
    if (month < 10) {
      result.push(year + "-0" + month);
    } else {
      if (month < 13) {
        result.push(year + "-" + month);
      } else {
        month = 1;
        year++;
        result.push(year + "-0" + month);
      }
    }
    i++;
  }
  return result;
}

EXAMPLES;
getAfterMonthsByNum("2018-01-01", 3); // [ '2018-01', '2018-02', '2018-03' ]
```
