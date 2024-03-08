# How do I use JavaScript to modify the URL without reloading the page?

## 如何使用 JavaScript 修改 URL 而不重载页面？

### Using the History API

`HTML5 History API` 无疑是现代网站的必经之路，因为它完成了手头的任务，同时也提供了额外的功能。你可以使用 `history.pushState ()`或 `history.replaceState ()`来修改浏览器中的 URL，这取决于你的需要:

```js
// Current URL: https://my-website.com/page_a
const nextURL = 'https://my-website.com/page_b';
const nextTitle = 'My new page title';
const nextState = { additionalInformation: 'Updated the URL with JS' };

// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL);

// This will replace the current entry in the browser's history, without reloading
window.history.replaceState(nextState, nextTitle, nextURL);
```

这两个方法的参数是相同的，允许您传递一个定制的 `serializable` 状态对象作为第一个参数、一个定制的标题(尽管大多数浏览器会忽略这个参数)以及您想要在浏览器历史记录中添加/替换的 URL。请记住，`History API` 只允许相同来源的 url，因此无法导航到完全不同的网站。

### Using the Location API

旧的 `Location API` 并不是最好的工具，因为它会重新加载页面，但是它仍然允许您修改当前 URL，并且在使用旧版浏览器时可能非常有用。您可以使用 `window.location.href`、 `location.assign ()`或 `location.replace ()`来修改 URL:

```js
// Current URL: https://my-website.com/page_a
const nextURL = 'https://my-website.com/page_b';

// This will create a new entry in the browser's history, reloading afterwards
window.location.href = nextURL;

// This will replace the current entry in the browser's history, reloading afterwards
window.location.assign(nextURL);

// This will replace the current entry in the browser's history, reloading afterwards
window.location.replace(nextURL);
```

正如您所看到的，这三个选项都将导致页面重新加载，这可能是不受欢迎的。此外，与使用 `History API` 不同，您只能设置 URL，不需要任何附加参数。最后，位置 API 不会限制您使用同一来源的 url，如果您不小心的话，这可能会导致安全问题。
