# getURLParameters

创建一个包含当前URL参数的对象。

- 使用带有适当正则表达式的`String.prototype.match（）`来获取所有键值对。
- 使用`Array.prototype.reduce（）`映射并将它们组合为单个对象。
- 传递`location.search`作为参数以应用于当前网址。

```js
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  );
EXAMPLES
getURLParameters('google.com'); // {}
getURLParameters('http://url.com/page?name=Adam&surname=Smith');
// {name: 'Adam', surname: 'Smith'}
```
