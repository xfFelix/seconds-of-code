# 怎样用javascript实现复制（clipboard）功能

在构建网站时，一个非常常见的需求是通过单击一个按钮将文本复制到剪贴板。Javascript可以很容易地做到这一点，只需5个简单的步骤:提示用户选择它或按下键盘上适当的组合键。Javascript只需5个小步骤就可以轻松完成此任务

1.创建一个附加到文档中的`<textarea>`元素。将它的值设置为我们想要复制到剪贴板的字符串。

2.将所述`<textarea>`元素追加到当前HTML文档中。

3.使用`HTMLInputElement.select（）`选择`<textarea>`元素的内容。

4.使用`Document.execCommand('copy')`将`<textarea>`的内容复制到剪贴板。

5.从文档中删除`<textarea>`元素。

此方法的最简单版本如下所示：

```js
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
```

请记住，由于`Document.execCommand（）`的工作方式，该方法不会在所有地方都有效，而只能是由于用户操作（例如，在`click`事件侦听器内部）而导致的。

**隐藏追加的元素**

上面的方法虽然可以使用，但可能存在一些问题，例如在添加和删除`<textarea>`时闪烁，这个问题在考虑可访问性时更加明显。 此方法的主要改进来自添加一些CSS，以使元素不可见并限制了用户的编辑：

```js
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
```

**保存并恢复原始文档的选择**

总结之前的最后考虑是尊重用户以前与网站的交互，例如已经选择了一些内容。 幸运的是，我们现在可以使用一些现代的Javascript方法和属性，例如`DocumentOrShadowRoot.getSelection（）`，`Selection.rangeCount`，`Selection.getRangeAt（）`，`Selection.removeAllRanges（）`和`Selection.addRange（）`来保存和恢复原始文档选择。 您可以在`copyToClipboard`片段中找到实现这些改进的最终代码。
