# Understanding the "this" keyword in JavaScript

## What is this?

在 JavaScript 中，`this` 关键字指的是当前正在执行代码的对象。评估结果的简短版本如下:

- 默认情况下, `this` 指的是全局对象
- 在函数中，当不处于严格模式时, `this` 指的是全局对象
- 在函数中，当处于严格模式时,`this` 是 `undefined`.
- 在箭头函数中,保留封闭词法上下文的值 `this`.
- 在对象方法中,引用方法调用的对象
- 在构造函数调用中,绑定到正在构造的新对象上
- 在事件处理程序中,与放置侦听器的元素绑定

## Global context

在全局执行上下文中，`this`引用全局对象。

```js
console.log(this === window); // true
```

## Function context

当不处于严格模式时，函数的这个值引用全局对象。

```js
function f() {
  return this;
}

console.log(f() === window); // true
```

当处于严格模式时，如果在进入执行上下文时没有设置函数的 `this`，则该函数的 `this` 将是未定义的。

```js
'use strict';

function f() {
  return this;
}

console.log(f()); // undefined
```

## Object context

当一个函数作为一个对象的方法被调用时，`this` 函数引用该方法所调用的对象。这适用于在对象的原型链中任何地方定义的方法(即自己的方法和继承的方法)。

```js
const obj = {
  f: function() {
    return this;
  }
};

const myObj = Object.create(obj);
myObj.foo = 1;

console.log(myObj.f()); // { foo: 1 }
```

类似地，当在构造函数中使用时，`this` 指的是正在构造的对象。

```js
class C {
  constructor() {
    this.x = 10;
  }
}

const obj = new C();
console.log(obj.x); // 10
```

## Arrow function context

在箭头函数中，`this` 将保留封闭词法上下文的 `this` 的值。

```js
const f = () => this;

console.log(f() === window); // true

const obj = {
  foo: function() {
    const baz = () => this;
    return baz();
  },
  bar: () => this
};

console.log(obj.foo()); // { foo, bar }
console.log(obj.bar() === window); // true
```

注意在第二个例子中，一个箭头函数的 this 是如何引用全局对象的，除非包装在一个普通的函数调用中，这个函数调用指的是`this`调用的对象，`this`的词法上下文由箭头函数保留。

## Event handler context

在事件处理程序中使用时，`this`引用放置侦听器的元素。

```js
const el = document.getElementById('my-el');

el.addEventListener('click', function() {
  console.log(this === el); // true
});
```

## Binding this

使用 `Function.prototype.bind ()`从现有函数返回一个新函数，这个函数永久地绑定到 `bind ()`的第一个参数。

```js
function f() {
  return this.foo;
}

var x = f.bind({foo: 'hello'});
console.log(x()); // 'hello'
```

类似地，使用 `Function.prototype.call ()`或 `Function.prototype.apply ()`将被调用的函数的 `this` 绑定到这两个函数的第一个参数，仅用于此调用。

```js
function f() {
  return this.foo;
}

console.log(f.call({foo: 'hi'})); // 'hi'
```
