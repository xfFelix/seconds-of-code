# getBeforeMonthsByNum

- 根据数量往后推月份

```js
/**
 * 时间 月份向前推
 * @param date
 * @param num
 */
function getBeforeMonthsByNum(date, num) {
  var dates = date.split("-");
  var year_ = dates[0] * 1;
  var month_ = dates[1] * 1;
  var i = num;
  var result = [];
  while (i > 0) {
    i--;
    var month = month_;
    var year = year_;
    if (i == 0) {
      result.push(dates[0] + "-" + dates[1]);
    } else {
      if (month_ < num) {
        month += 12;
        year--;
        month -= i;
        if (month < 10) {
          result.push(year + "-0" + month);
        } else {
          if (month == 13) {
            month = 1;
            result.push(year + "-0" + month);
          } else {
            result.push(year + "-" + month);
          }
        }
      } else {
        month -= i;
        if (month < 10) {
          result.push(year + "-0" + month);
        } else {
          result.push(year + "-" + month);
        }
      }
    }
  }
  return result;
}

EXAMPLES;
getBeforeMonthsByNum("2018-01-01", 3); // [ '2017-11', '2017-12', '2018-01' ]
```
