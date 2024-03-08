# moneyToNumValue

金额转换成 number

```js
function moneyToNumValue(val) {
  var num = val.trim();
  var ss = num.toString();
  if (ss.length === 0) {
    return "0";
  }
  return ss.replace(/,/g, "");
}

EXAMPLES;
moneyToNumValue("1,234,567.00"); // 1234567.00
```
