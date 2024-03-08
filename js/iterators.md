# What are JavaScript Iterators and where can I use them?

## 什么是JavaScript iterators？在哪里可以使用它们？

`JavaScript iterators`是在ES6中引入的，它们用于循环一系列值（通常是某种集合）。 根据定义，`iterators`必须实现`next（）`函数，该函数以`{value，done}`的形式返回对象，其中`value`是迭代序列中的下一个值，并且`done`是布尔值，确定序列是否已被使用。

一个在实际项目中实际使用的非常简单的`iterators`可能如下所示：

```js
class LinkedList {
  constructor(data) {
    this.data = data;
  }

  firstItem() {
    return this.data.find(i => i.head);
  }

  findById(id) {
    return this.data.find(i => i.id === id);
  }

  [Symbol.iterator]() {
    let item = {next: this.firstItem().id};
    return {
      next: () => {
        item = this.findById(item.next);
        if(item) {
          return {value: item.value, done: false};
        }
        return {value: undefined, done: true};
      }
    };
  }
}

const myList = new LinkedList([
  {id: 'a10', value: 'First', next: 'a13', head: true },
  {id: 'a11', value: 'Last', next: null, head: false },
  {id: 'a12', value: 'Third', next: 'a11', head: false },
  {id: 'a13', value: 'Second', next: 'a12', head: false }
]);

for(let item of myList) {
  console.log(item);    // 'First', 'Second', 'Third', 'Last'
}
```

在上面的示例中，我们实现了一个`LinkedList`数据结构，该结构在内部使用数据数组，其中每个项目都有一个`value`，以及一些用于确定其在序列中位置的特定于实现的属性。 默认情况下，从此类构造的对象是不可迭代的，因此我们通过使用`Symbol.iterator`定义一个迭代器并将其设置为使得返回的序列基于该类的内部实现按顺序排列，而返回的项仅返回 他们的价值。

值得一提的是，迭代器只是函数，这意味着它们可以像其他任何函数一样调用（例如，将迭代委派给现有的迭代器），同时也不受限于`Symbol.iterator`名称，从而使我们可以为 同一对象。 这是这些概念的示例：

```js
class SpecialList {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }

  values() {
    return this.data
      .filter(i => i.complete)
      .map(i => i.value)
      [Symbol.iterator]();
  }
}

const myList = new SpecialList([
  {complete: true, value: 'Lorem ipsum'},
  {complete: true, value: 'dolor sit amet'},
  {complete: false},
  {complete: true, value: 'adipiscing elit'}
]);

for(let item of myList) {
  console.log(item);  // The exact data passed to the SpecialList constructor above
}

for(let item of myList.values()) {
  console.log(item);  // 'Lorem ipsum', 'dolor sit amet', 'adipiscing elit'
}
```

在此示例中，我们使用数据对象的本机数组迭代器使`SpecialList`可迭代，并返回数据数组的确切值。 同时，我们还定义了一个值方法，它本身就是一个迭代器，在数据数组上使用`Array.prototype.filter（）`和`Array.prototype.map（）`，然后最终返回结果的`Symbol.iterator`，仅允许迭代 覆盖序列中的非空对象，并仅返回每个对象的值。
