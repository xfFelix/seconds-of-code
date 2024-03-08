# getDaysBetween

- 获取俩个日期内的所有天数

```js
function getDaysBetween(start, end) {
  var result = [];
  //使用传入参数的时间
  var startTime = new Date(start);
  var endTime = new Date(end);
  while (endTime - startTime >= 0) {
    let year = startTime.getFullYear();
    let month = startTime.getMonth();
    month = month < 9 ? "0" + (month + 1) : month + 1;
    let day =
      startTime.getDate().toString().length == 1
        ? "0" + startTime.getDate()
        : startTime.getDate();
    //加入数组
    result.push(year + "-" + month + "-" + day);
    //更新日期
    startTime.setDate(startTime.getDate() + 1);
  }
  return result;
}

EXAMPLES;
console.log(getDaysBetween("2020-9-12", "2020-10-28"));
```

![](/images/get-days-between.png)
