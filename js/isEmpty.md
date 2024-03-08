# isEmpty

检查 a 值是否为空对象/集合、没有可枚举属性或任何类型不被视为集合。

* 检查提供的值是否为null或长度是否等于0。

```js
const isEmpty = val => val == null || !(Object.keys(val) || val).length;
EXAMPLES
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty('text'); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection
```
