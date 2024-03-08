# isISOString

检查给定的字符串在简化的扩展ISO格式（ISO 8601）中是否有效。

* 使用`new Date（）`从给定的字符串创建日期对象。
* 使用`Date.prototype.valueOf（）`和`Number.isNaN（）`检查生成的日期对象是否有效。
* 使用`Date.prototype.toISOString（）`将日期的ISO格式字符串表示形式与原始字符串进行比较。

```js
const isISOString = val => {
  const d = new Date(val);
  return !Number.isNaN(d.valueOf()) && d.toISOString() === val;
};
EXAMPLES
isISOString('2020-10-12T10:10:10.000Z'); // true
isISOString('2020-10-12'); // false
```
