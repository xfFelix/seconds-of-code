# renameKeys

用提供的值替换多个对象键的名称

- 将`Object.keys（）`与`Array.prototype.reduce（）`和散布运算符（`...`）结合使用，以获取对象的键并根据`keysMap`重命名它们。

```js
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
EXAMPLES;
const obj = { name: "Bobo", job: "Front-End Master", shoeSize: 100 };
renameKeys({ name: "firstName", job: "passion" }, obj);
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```
