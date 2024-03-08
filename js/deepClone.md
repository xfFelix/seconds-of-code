# deepClone

创建对象的深层克隆。 克隆基元，数组和对象，不包括类实例。

- 使用递归
- 检查传递的对象是否为 null，如果是，则返回 null。
- 使用 `Object.assign（）`和一个空对象（`{}`）创建原始对象的浅表副本。
- 使用 `Object.keys（）`和 `Array.prototype.forEach（）`确定哪些键值对需要深度克隆。
- 如果对象是数组，请将克隆的长度设置为原始对象的长度，然后使用 `Array.from（clone）`创建一个克隆。

```js
const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};
EXAMPLES;
const a = { foo: "bar", obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```
