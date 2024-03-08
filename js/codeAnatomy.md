# Code Anatomy - For loops, array reduce and method chaining

## 代码剖析 - 对于循环，数组精简和方法链接

**循环**

```js
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
let filePaths = [];

for (let file of files) {
  const fileName = file.trim();
  if(fileName) {
    const filePath = `~/cool_app/${fileName}`;
    filePaths.push(filePath);
  }
}

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

* 可以使用任何`for`循环-详细了解不同的JavaScript循环。
* 由于功能编程越来越流行，因此如今不那么普遍了。
* 控制迭代，例如跳过元素或提前返回。
* 需要在循环外部预先声明结果数组。
* 使用`Array.prototype.push（）`或spread（`...`）运算符添加元素。
* `O（N）`复杂度，每个元素将仅迭代一次。

**数组 reduce**

```js
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths = files.reduce((acc, file) => {
  const fileName = file.trim();
  if(fileName) {
    const filePath = `~/cool_app/${fileName}`;
    acc.push(filePath);
  }
  return acc;
}, []);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

* 将`Array.prototype.reduce（）`与一个空数组一起用作初始值。
* 由于函数式编程越来越流行，因此如今更常见。
* 对迭代的控制较少，无法跳过元素或提早返回。
* 如有必要，可以与其他方法链接在一起。
* 使用`Array.prototype.push（）`或spread（`...`）运算符添加元素。
* `O（N）`复杂度，每个元素将仅迭代一次。

**Method chaining**

```js
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths = files
  .map(file => file.trim())
  .filter(Boolean)
  .map(fileName => `~/cool_app/${fileName}`);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

* 使用`Array.prototype.map（）`和`Array.prototype.filter（）`。
* 由于函数式编程越来越流行，因此如今更为普遍。
* 对迭代的控制较少，无法跳过元素或提早返回。
* 声明式，易于阅读和重构的链可以根据需要增长。
* 不要使用`Array.prototype.push（）`或`spread（...）`运算符。
* `O（cN）`复杂度，每个元素`c`次迭代，（`c`：链的长度）。
