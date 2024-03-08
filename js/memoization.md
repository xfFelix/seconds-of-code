# Where and how can I use memoization in JavaScript?

## 我在哪里以及如何在JavaScript中使用备忘录？

备注化是一种常用的技术，可用于显着加快代码速度。 它使用缓存来存储结果，因此后续的耗时函数调用不会再次执行相同的工作。 根据此定义，我们可以轻松提取一些标准，这些标准可以帮助我们确定何时在代码中使用备忘录：

* 记忆化应主要用于加快执行缓慢，昂贵或耗时的函数的速度
* 记忆化可加快后续调用的速度，因此，当您期望在相同情况下多次调用同一函数时，最好使用记忆
* 记忆存储结果在内存中，因此在完全不同的情况下多次调用同一函数时应避免

实现记忆的简单的，面向对象的示例如下：

```js
class MyObject {
  constructor(data) {
    this.data = data;
    this.data[this.data.length - 2] = { value: 'Non-empty' };
  }

  firstNonEmptyItem() {
    return this.data.find(v => !!v.value);
  }

  firstNonEmptyItemMemo() {
    if (!this.firstNonEmpty)
      this.firstNonEmpty = this.data.find(v => !!v.value);
    return this.firstNonEmpty;
  }
}

const myObject = new MyObject(Array(2000).fill({ value: null }));

for (let i = 0; i < 100; i ++)
  myObject.firstNonEmptyItem();       // ~4000ms
for (let i = 0; i < 100; i ++)
  myObject.firstNonEmptyItemMemo();   // ~70ms
```

上面的示例展示了一种在类内部实现记忆的方法，但是它假设数据结构不会在对象的生命周期内发生变化，并且这是我们将进行的唯一昂贵的函数调用，因此无法重用 。 它还不考虑传递给函数的参数，这会改变结果。 可以以备忘代码段的形式找到可以与任何给定功能一起使用并考虑参数的功能性方法，该代码段使用`Map`存储不同的值。

我们仍然建议使用该代码段作为记住函数的主要方式，但是JavaScript的`Proxy`对象通过使用`handler.apply（）`陷阱提供了一种有趣的替代方法，可将其用于此目的，如下所示：

```js
const memoize = fn => new Proxy(fn, {
  cache: new Map(),
  apply (target, thisArg, argsList) {
    let cacheKey = argsList.toString();
    if(!this.cache.has(cacheKey))
      this.cache.set(cacheKey, target.apply(thisArg, argsList));
    return this.cache.get(cacheKey);
  }
});

const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoizedFibonacci = memoize(fibonacci);

for (let i = 0; i < 100; i ++)
  fibonacci(30);                      // ~5000ms
for (let i = 0; i < 100; i ++)
  memoizedFibonacci(30);              // ~50ms
```
