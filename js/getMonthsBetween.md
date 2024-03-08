# getMonthsBetween

- 获取俩个日期内的所有月份

```js
function getMonthBetween(start, end) {
  //初始化数组
  var result = [];
  //切割起始年月
  var s = start.split("-");
  //切割结束年月
  var e = end.split("-");
  //获取时间对象
  var min = new Date();
  var max = new Date();
  //设置起始时间
  min.setFullYear(s[0], s[1]);
  //设置结束时间
  max.setFullYear(e[0], e[1]);
  //复制一份起始时间对象
  var curr = min;
  //定义字符串
  var str = "";
  //起始时间在结束时间之前
  while (curr <= max) {
    //获取此时间的月份
    var month = curr.getMonth();
    //如果月份为0，也就是代表12月份
    if (month === 0) {
      str = curr.getFullYear() - 1 + "-" + 12;
    } else {
      //正常月份
      str = curr.getFullYear() + "-" + (month < 10 ? "0" + month : month);
    }
    //将此年月加入数组
    result.push(str);
    //更新此时间月份
    curr.setMonth(month + 1);
  }
  return result;
}

EXAMPLES;
console.log(getMonthBetween("2018-09", "2020-02"));
```

![](/images/get-months-between.png)
