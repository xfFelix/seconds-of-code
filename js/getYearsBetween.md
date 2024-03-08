# getYearsBetween

- 获取俩个日期内的所有年份

```js
function getYearBetween(start, end) {
  var result = [];
  //使用传入参数的时间
  var startTime = new Date(start);
  var endTime = new Date(end);
  while (endTime - startTime >= 0) {
    //获取年份
    let year = startTime.getFullYear();
    //加入数组
    result.push(year);
    //更新日期
    startTime.setFullYear(startTime.getFullYear() + 1);
  }
  return result;
}

EXAMPLES;
console.log(getYearBetween("2017", "2020"));
```

![](/images/get-years-between.png)
