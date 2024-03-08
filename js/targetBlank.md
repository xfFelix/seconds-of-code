# Protect your users from malicious websites when using target="_blank"

## 当使用 target = “ _ blank”时，保护您的用户免受恶意网站的攻击

通常，当链接到我们网站的外部资源时，我们使用 `target = “ _ blank”`在新的标签页或窗口中打开链接页面。但是有一个安全风险我们应该意识到。新标签通过 `window.opener` 获得了对链接页面(即我们的网站)的有限访问权限，然后可以通过` window.opener.location` 更改链接页面的 `URL` (这被称为 `tabnabbing`)。

这可能是一个问题，如果外部资源是不值得信任的，可能已经被黑客攻击，域名已经更换所有者多年等。不能保证一个第三方资源，无论多么值得信赖，实际上可以信任我们的用户的安全，我们，作为开发人员，应该始终意识到这种风险。

```html
<!-- Bad: susceptible to tabnabbing -->
<a href="https://externalresource.com/some-page" target="_blank">
  External resource
</a>

<!-- Good: new tab cannot cause problems  -->
<a
  href="https://externalresource.com/some-page"
  target="_blank"
  rel="noopener noreferrer"
>
  External resource
</a>
```

为了防止在新选项卡中打开的链接引起任何麻烦，我们应该总是将 `rel = “ noopener noreferrer”`属性添加到所有目标 = “` _ blank`”链接中。
