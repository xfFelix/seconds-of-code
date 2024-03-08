# Tip: Avoid "javascript:void(0)" for empty links

## 对于空链接避免使用"javascript:void(0)"

创建空链接的方法有很多种，但是某些选项比其他选项更合适。 关于它的最常见辩论之一是应该使用`href =""`，`href ="＃"`还是`href =" javascript：void（0）"`。

通常，您要避免使用`href =“ javascript：void（0）”`，因为这将导致浏览器解析链接URL的值，这既昂贵又不必要。 它还会引入一个潜在的XSS安全漏洞，例如`javascript：URL`违反了内容安全策略（CSP）。

有了这种方式，很明显在大多数情况下应该首选`href =“”`或`href =“＃”`。 两者之间的主要区别是`href =“＃”`指向页面顶部，而`href =“”`指向当前页面。 这可能会有不良的副作用，例如滚动到页面顶部或分别出现链接样式问题。 为了防止其中任何一个充当链接，可以使用`Event.preventDefault（）`并使用JavaScript适当地处理它们。

最后，在创建一个空链接时，应始终考虑在语义上更合适的替代方法，例如`<button>`，`<div>`或`<span>`标记。 毕竟，链接应始终表现得像一个链接，并且用JavaScript或其他任何方式劫持它势必迟早会遇到一些可访问性问题。
