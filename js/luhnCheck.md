# luhnCheck

Luhn 算法的实现，用于验证各种标识号，例如信用卡号，IMEI 号，国家提供商标识号等。

- 将`String.prototype.split（''）`，`Array.prototype.reverse（）`和`Array.prototype.map（）`与`parseInt（）`结合使用以获得数字数组。
- 使用`Array.prototype.splice（0，1）`获得最后一位。
- 使用`Array.prototype.reduce（）`来实现 Luhn 算法。
- 如果`sum`可被`10`整除，则返回`true`，否则返回`false`。

```js
const luhnCheck = (num) => {
  let arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
};
EXAMPLES;
luhnCheck("4485275742308327"); // true
luhnCheck(6011329933655299); //  false
luhnCheck(123456789); // false
```
