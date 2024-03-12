# charles 抓包

操作系统： macbook

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

## 参考链接

[小程序抓包流程](https://dev.weixin.qq.com/docs/gateway/snifferpacket.html)

[Charles 抓 https 包显示＜ unknown ＞](https://blog.csdn.net/ios_xumin/article/details/122218974)
