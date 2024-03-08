# get

## 从对象检索给定选择器指示的一组属性

* 将`Array.prototype.map（）`用于每个选择器，将`String.prototype.replace（）`用于使用点替换方括号。
* 使用`String.prototype.split（'。'）`拆分每个选择器。
* 使用`Array.prototype.filter（）`删除空值，并使用`Array.prototype.reduce（）`获取每个选择器指示的值。

```js
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
EXAMPLES
const obj = {
  selector: { to: { val: 'val to select' } },
  target: [1, 2, { a: 'test' }],
};
get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
// ['val to select', 1, 'test']
```
