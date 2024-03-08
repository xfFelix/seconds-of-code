# uppercaseFirst

首字母大写

```js
/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

EXAMPLES;
uppercaseFirst("test"); // Test
```
