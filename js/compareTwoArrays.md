# How do I compare two arrays in JavaScript?

## Equality comparison(相等比较)

在 JavaScript 中使用松散的或严格的相等运算符(`==` 或 `===`)比较两个数组通常会导致 `false`，即使两个数组以相同的顺序包含相同的元素。这是因为在 JavaScript 中，数组和对象是通过引用而不是通过值进行比较的，这意味着这个解决方案不会产生预期的结果:

```js
const a = [1, 2, 3]
const b = [1, 2, 3]

a === b // false
```

## JSON.stringify

许多人建议的一种常见解决方案是使用 `JSON.stringify ()` ，它允许我们序列化每个数组，然后比较两个序列化的字符串。一个简单的实现可能看起来像这样:

```js
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const a = [1, 2, 3]
const b = [1, 2, 3]

equals(a, b) // true
```

虽然这看起来是一个很好的、简短的、易于理解的解决方案，但是在不同值的序列化字符串相同的某些边缘情况下，它就不够好了。例如:

```js
const str = 'a'
const strObj = new String('a')
str === strObj // false
equals([str], [strObj]) // true, should be false

null === undefined // false
equals([null], [undefined]) // true, should be false
```

虽然这些情况看起来相当罕见，但它们可能会导致一些非常烦人的问题，这些问题很难跟踪和修复，这就是为什么不推荐在大多数用例中使用这种解决方案的原因。

## A better way(一个更好的方法)

更好的方法是比较两个数组的长度并使用 `ary.prototype.every ()`来比较两个数组的值:

```js
const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i])

const a = [1, 2, 3]
const b = [1, 2, 3]
const str = 'a'
const strObj = new String('a')

equals(a, b) // true
equals([str], [strObj]) // false
equals([null], [undefined]) // false
```

这种方法防止了上面描述的序列化问题，但是它没有考虑到嵌套数组或对象，这些需要递归检查。对于处理这个问题和其他问题的健壮解决方案，应该使用 `equals` 代码片段。

## Comparing out of order(无序的比较)

最后，在某些情况下，每个数组中元素的顺序并不重要，我们只关心两个数组中存在的相同值。对于这些情况，可以使用 `Set` 和 `Array.prototype.filter ()`结合循环迭代唯一的值，并检查每个值在每个数组中出现的次数是否相同:

```js
const equalsIgnoreOrder = (a, b) => {
  if (a.length !== b.length) return false
  const uniqueValues = new Set([...a, ...b])
  for (const v of uniqueValues) {
    const aCount = a.filter(e => e === v).length
    const bCount = b.filter(e => e === v).length
    if (aCount !== bCount) return false
  }
  return true
}
```

要获得更详细的解释，您应该查看 [haveSameContents](/js/haveSameContents) 代码片段。
