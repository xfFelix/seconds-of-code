# compactObject

从对象或数组中深度删除所有伪造的值.

* 使用递归。
* 初始化可迭代数据，对数组使用`Array.isArray（）`，`Array.prototype.filter（）`和`Boolean`以避免稀疏数组。
* 使用`Object.keys（）`和`Array.prototype.reduce（）`迭代具有适当初始值的每个键。
* 使用`Boolean`确定每个键值的真实性，如果真实，则将其添加到累加器中。
* 使用`typeof`确定给定值是否是`object`，然后再次调用该函数以对其进行深度压缩。

```js
const compactObject = val => {
  const data = Array.isArray(val) ? val.filter(Boolean) : val;
  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      if (Boolean(value))
        acc[key] = typeof value === 'object' ? compactObject(value) : value;
      return acc;
    },
    Array.isArray(val) ? [] : {}
  );
};
EXAMPLES
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' }
};
compactObject(obj);
// { c: true, e: 1, g: 'a', h: [ true, 1, 'a' ], i: { l: 'a' } }
```
