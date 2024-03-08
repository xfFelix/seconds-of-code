# numToMoneyValue

数字转换成金额

```js
function numToMoneyValue(num) {
  if (num) {
    if (isNaN(num)) {
      alert("金额中含有不能识别的字符");
      return;
    }
    num = typeof num === "string" ? parseFloat(num) : num; // 判断是否是字符串如果是字符串转成数字
    num = num.toFixed(2); // 保留两位
    num = parseFloat(num); // 转成数字
    num = num.toLocaleString(); // 转成金额显示模式
    // 判断是否有小数
    if (num.indexOf(".") == -1) {
      num = num + ".00";
    } else {
      num = num.split(".")[1].length < 2 ? num + "0" : num;
    }
    return num; // 返回的是字符串23,245.12保留2位小数
  } else {
    return (num = null);
  }
}

function toThousandFilter(num) {
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}

EXAMPLES;
toThousandFilter(10000.01); // 10,000.01
toThousandFilter(10000); // 10,000
numToMoneyValue(123456); // 123,456.00
```
