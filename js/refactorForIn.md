# Tip: Refactoring your for...in loops to avoid ESLint warnings

ESLint 是我选择的工具之一，但由于它更喜欢我做事的方式，它常常会妨碍我的工作。其中一个警告我见过很多次，但我不愿意承认，那就是:

> for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.eslint(no-restricted-syntax)

这里有三个重构选项来解决这个问题:

## Object.keys()

`Object.keys ()`具有与 `for. . in` 循环完全相同的行为，因此它可以用作一个插入替换:

```js
const data = [3, 4];
// Same as for (let k in data) console.log(k)
Object.keys(data).forEach(k => console.log(k));
// "0" "1"
```

## Object.values()

`Object.values ()`与 `Object.keys ()`非常相似，但返回的是值而不是键，这可能是您真正使用键用于的目的:

```js
const data = [3, 4];
// Iterate over the values
Object.keys(data).forEach(v => console.log(v));
// 3 4
```

## Object.entries()

最后，如果您同时需要 key 和 value，那么 `Object.entries ()`已经介绍了:

```js
const data = [3, 4];
// Iterate over the data, returning key-value pairs
Object.entries(data).forEach(e => console.log(e[0], e[1]));
// ["0", 3] ["1", 4]
```
