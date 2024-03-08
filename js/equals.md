# equals

## 在两个值之间执行深度比较以确定它们是否等效。

- 检查俩个值是否相等，如果都是 `Date` 类型,比较他们的时间戳或者如果他们都是非对象（`not object`）,则直接进行`===`比较
- 检查只有一个值是否为 `null` 或 `undefined`，或者它们的 `prototype` 不同
- 如果满足上述条件都没有，请使用 `Object.keys（）` 检查两个值是否具有相同数量的键。
- 使用 `array.prototype.every（）` 检查 `a` 中是否存在每个密钥，如果通过递归调用 `Equals（）` 是等同的。

```js
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
};

Examples;
equals(
  { a: [2, { e: 3 }], b: [4], c: "foo" },
  { a: [2, { e: 3 }], b: [4], c: "foo" }
); // true
equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true
```
