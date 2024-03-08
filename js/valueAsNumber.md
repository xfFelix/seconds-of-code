# You can get the value of an input element as a number

## 您可以将输入元素的值作为一个数字

大多数时候，在事件侦听器中访问 `HTMLInputElement` 的值时，我们使用类似于 `e.target.value` 的代码。这在大多数情况下是可以的，但是当我们需要输入字段的数值时，我们必须解析它并检查该值是否确实有效等等。这可能会非常令人讨厌，尤其是在处理具有许多输入字段的较大表单时。

如果我告诉您有一种更简单的方法可以从输入字段中获取数值，您会怎么做？遇到 HTMLInputElement.valueAsNumber，这是一个方便的属性，如果输入字段的值可以转换为数字或 NaN (如果无法进行转换) ，它将返回一个数字值。

```js
const quantityInput = document.getElementById('quantity-input');
let quantity;
// Bad: parseFloat() converts the string to a number
quantity = parseFloat(quantityInput.value);
// Good: returns a numeric value
quantity = quantityInput.valueAsNumber;
```

像往常一样，这带来了一个警告，即它只适用于 `type = “ number”`输入(尽管这可能是您最需要它的地方)。另外，您还可以使用 `HTMLInputElement.valueAsDate` 从 `type = “ Date”`输入中获取 `Date` 对象，这在某些情况下可能也很方便。
