# charles 抓包

操作系统： MacBook

## 1. 安装 charles

```
brew install charles
```

安装成功之后，打开即可抓取 `http` 请求，但是不能抓取 `https` 请求, 会发现有着 `<unknown>`

## 2. 电脑端配置

### 下载证书

`help` 👉 `SSL Proxying` 👉 `Install Charles Root Certificate`

![cert](/images/charles/1.png)

> 有的时候钥匙串会提示安装失败，这个时候点击 `Save Charles Root Certificate...`, 然后把下载好的文件拖动到钥匙串即可

### 信任证书

钥匙串中搜索关键字 `Charles` 找到刚安装的证书，此时证书状态为此根证书不被信任

![cert](/images/charles/2.png)

双击打开证书，设置为`始终信任`，输入电脑密码（无密码的打扰了）

![cert](/images/charles/3.png)

信任后证书的状态 此证书已标记为受此账户信任 👇

![cert](/images/charles/4.png)

### 允许所有访问

`Charles` 👉 `Proxy` 👉 `SSL Proxying Setting` 👉 `Include`

`host` 和 `port` 添加 `*` 即可允许所有请求

![cert](/images/charles/5.png)

> `Enable SSL Proxying` 必须要勾选 ☑️

## 3. 移动端配置

以 `iphone` 为例

### 打开证书访问地址

![cert](/images/charles/6.png)

![cert](/images/charles/7.png)

### wifi 设置代理

保证 Wi-Fi 处于同一网络，`设置` 👉 `无线局域网` 👉 `进入当前网络详情` 👉 `配置代理`

![cert](/images/charles/8.png)

### 下载证书

`Safari 浏览器 ` 👉 `chls.pro/ssl` 👉 `允许`

![cert](/images/charles/9.png)

### 安装证书

`设置` 👉 `通用` 👉 `VPN与设备管理` 👉 `已下载的 Charles Proxy 安装`

### 信任证书

`设置` 👉 `通用` 👉 `关于本机` 👉 `证书信任设置`（若未信任，进行信任）

![cert](/images/charles/10.png)

## 结束

看看最终成果

![cert](/images/charles/11.png)

## 问题

### charles 破解

默认的 charles 是有免费使用期限的，大约是 30 天，而且会一直提示，这里教大家一个方式，免费破解 charles，自己购买许可证也行，大概要 50 美元，所以大家懂的

进入 `help` 下的第一个菜单 `register...`, 然后按照以下操作

```
生成注册码地址:https://www.charles.ren/

Registered Name: https://zhile.io
License Key: 48891cf209c6d32bf4
```

成功之后重启，发现 `register` 变成以下模样

![cert](/images/charles/12.png)

### 部分 APP 无法代理抓包的原因及解决方法

我们在一些 app 上发现抓包无效，好像 app 发现了我们是通过接口调用的，其实是因为证书的原因，我们在上面移动端安装证书的时候，证书安装的位置是处于用户级别，不是系统级别的，所以 app 才能识别的到证书不对。具体原理参考底下文案，我这里直接给我解决方案，经测试，有用。

方案就是采用 VPN 代理的方式，这里以 iphone 为例，每个程序猿的手机上必定有代理工具，我这里以 小火箭 🚀(`Shadowrocket`)为例：

1. 选择全局路由为「代理」
2. 添加服务节点（类型选择 `HTTP` 及 `HTTPS` ，服务器地址及端口为您代理抓包工具的地址与端口）
3. 设置状态为启用 （IOS 会同时自动创建 VPN）

![cert](/images/charles/13.png)

现在直接打开 `iphone` 上的任意 `APP`（不用再在 wifi 上重复设置代理） ，既可以在代理抓包工具上看到流量了

## 参考链接

[小程序抓包流程](https://dev.weixin.qq.com/docs/gateway/snifferpacket.html)

[Charles 抓 https 包显示＜ unknown ＞](https://blog.csdn.net/ios_xumin/article/details/122218974)

[Charles 的注册码/破解](https://cloud.tencent.com/developer/article/1883862)

[部分 APP 无法代理抓包的原因及解决方法（flutter 抓包）](https://www.cnblogs.com/lulianqi/p/11380794.html)
