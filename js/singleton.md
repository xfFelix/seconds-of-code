# How can I implement a singleton in JavaScript?

## 如何在JavaScript中实现单例？

单例是一种面向对象的软件设计模式，可确保给定的类仅实例化一次，并且在许多不同情况下（例如创建在应用程序之间共享的全局对象和组件）非常有用。 尽管JavaScript支持面向对象的编程，但似乎并没有提供许多简单的选项来实现此模式。

尽管有些先进，但最灵活的方法涉及使用代理对象。 `Proxy`对象用于定义所谓的陷阱，这些方法允许为某些操作（如属性查找，赋值等）定义自定义行为。单例模式指示给定的类只能有一个实例，这意味着最多 有用的陷阱是`handler.construct（）`，它是新运算符的陷阱。

由于处理程序本身是一个对象，因此我们可以使用它存储所需类的唯一实例（如果已实例化），同时还可以通过`handler.construct（）`为新操作符提供陷阱。 这样，我们可以创建一个对象，该对象可以轻松地重用于要转换为单例的任何类，同时还允许我们为可能要自定义的任何其他操作提供其他陷阱。

根据上述说明，这是该函数的最基本版本，它采用一个`class`并将其转换为单例：

```js
const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (!this.instance)
        this.instance = new target(...argumentsList);
      return this.instance;
    }
  });
}
```

以下是一个简单的实际示例，可以更好地了解其功能：

```js
class MyClass {
  constructor(msg) {
    this.msg = msg;
  }

  printMsg() {
    console.log(this.msg);
  }
}

MySingletonClass = singletonify(MyClass);

const myObj = new MySingletonClass('first');
myObj.printMsg();           // 'first'
const myObj2 = new MySingletonClass('second');
myObj2.printMsg();           // 'first'
```

在上面的示例中，您可以看到第二次实例化`MySingletonClass`，但由于实例已经存在，因此没有任何反应，因此将实例返回，而不是创建新对象。 尽管这是`singletonify`函数的最小实现，但可以轻松地对其进行扩展以进一步修改行为，甚至可以在后续调用中使用传递给构造函数的某些数据来更新其持有的实例。
