import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Seconds of Code',
  description: 'A VitePress Site',
  base: '/seconds-of-code/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JS', link: '/js/addMinutesToDate' },
      { text: 'Interview', link: '/interview/bigFileUpload' },
      { text: 'Question', link: '/question/destructuringAssignment' },
      { text: '其他', link: '/other/charles' },
    ],

    sidebar: {
      '/js/': [
        {
          text: 'JS',
          items: [
            { text: 'addMinutesToDate', link: '/js/addMinutesToDate' },
            { text: 'arrayDifferent', link: '/js/arrayDifferent' },
            { text: 'arrayMethods', link: '/js/arrayMethods' },
            { text: 'arrowFunction', link: '/js/arrowFunction' },
            { text: 'bucketSort', link: '/js/bucketSort' },
            { text: 'changeUrl', link: '/js/changeUrl' },
            { text: 'clipboard', link: '/js/clipboard' },
            { text: 'cloneObject', link: '/js/cloneObject' },
            { text: 'codeAnatomy', link: '/js/codeAnatomy' },
            { text: 'compactObject', link: '/js/compactObject' },
            { text: 'compareTwoArrays', link: '/js/compareTwoArrays' },
            { text: 'countWeekDaysBetween', link: '/js/countWeekDaysBetween' },
            { text: 'debounce', link: '/js/debounce' },
            { text: 'debouncePromise', link: '/js/debouncePromise' },
            { text: 'deepClone', link: '/js/deepClone' },
            { text: 'delay', link: '/js/delay' },
            { text: 'emptyLink', link: '/js/emptyLink' },
            { text: 'equals', link: '/js/equals' },
            { text: 'formatDuration', link: '/js/formatDuration' },
            { text: 'formatTime', link: '/js/formatTime' },
            { text: 'formatParse', link: '/js/formatParse' },
            { text: 'get', link: '/js/get' },
            { text: 'getAfterMonthsByNum', link: '/js/getAfterMonthsByNum' },
            { text: 'getBeforeMonthsByNum', link: '/js/getBeforeMonthsByNum' },
            { text: 'getDaysBetween', link: '/js/getDaysBetween' },
            { text: 'getDaysDiffBetweenDates', link: '/js/getDaysDiffBetweenDates' },
            { text: 'getMonthsBetween', link: '/js/getMonthsBetween' },
            { text: 'getMonthsDiffBetweenDates', link: '/js/getMonthsDiffBetweenDates' },
            { text: 'getURLParameters', link: '/js/getURLParameters' },
            { text: 'getYearsBetween', link: '/js/getYearsBetween' },
            { text: 'haveSameContents', link: '/js/haveSameContents' },
            { text: 'heapsort', link: '/js/heapsort' },
            { text: 'higherOrderFunc', link: '/js/higherOrderFunc' },
            { text: 'indexOfSubstrings', link: '/js/indexOfSubstrings' },
            { text: 'isBetweenDates', link: '/js/isBetweenDates' },
            { text: 'isEmpty', link: '/js/isEmpty' },
            { text: 'isISOString', link: '/js/isISOString' },
            { text: 'iterable2array', link: '/js/iterable2array' },
            { text: 'iterators', link: '/js/iterators' },
            { text: 'lastDateOfMonth', link: '/js/lastDateOfMonth' },
            { text: 'luhnCheck', link: '/js/luhnCheck' },
            { text: 'memoization', link: '/js/memoization' },
            { text: 'miniDomAccess', link: '/js/miniDomAccess' },
            { text: 'moneyFormatter', link: '/js/moneyFormatter' },
            { text: 'moneyToChinese', link: '/js/moneyToChinese' },
            { text: 'moneyToNumValue', link: '/js/moneyToNumValue' },
            { text: 'numToMoneyValue', link: '/js/numToMoneyValue' },
            { text: 'parseTime', link: '/js/parseTime' },
            { text: 'promise', link: '/js/promise' },
            { text: 'pullBy', link: '/js/pullBy' },
            { text: 'quickSort', link: '/js/quickSort' },
            { text: 'range', link: '/js/range' },
            { text: 'refactorForIn', link: '/js/refactorForIn' },
            { text: 'renameKeys', link: '/js/renameKeys' },
            { text: 'singleton', link: '/js/singleton' },
            { text: 'sleep', link: '/js/sleep' },
            { text: 'sleepFunction', link: '/js/sleepFunction' },
            { text: 'swapCase', link: '/js/swapCase' },
            { text: 'takeRightUntil', link: '/js/takeRightUntil' },
            { text: 'takeUntil', link: '/js/takeUntil' },
            { text: 'targetBlank', link: '/js/targetBlank' },
            { text: 'ternaryOperator', link: '/js/ternaryOperator' },
            { text: 'this', link: '/js/this' },
            { text: 'throttle', link: '/js/throttle' },
            { text: 'timeAgo', link: '/js/timeAgo' },
            { text: 'unzipWith', link: '/js/unzipWith' },
            { text: 'uppercaseFirst', link: '/js/uppercaseFirst' },
            { text: 'valueAsNumber', link: '/js/valueAsNumber' },
          ],
        },
      ],
      '/interview/': [
        {
          text: 'Interview',
          items: [
            {
              text: '大文件上传',
              link: '/interview/bigFileUpload',
            },
            {
              text: '说说对 Node 中的 Buffer 的理解？',
              link: '/interview/buffer',
            },
            {
              text: '如何理解 CDN？说说实现原理？',
              link: '/interview/cdn',
            },
            {
              text: 'a===1&&a===2&&a===3',
              link: '/interview/dataHack',
            },
            {
              text: '什么是DNS协议',
              link: '/interview/dns',
            },
            {
              text: '说说对 Node 中的 fs 模块的理解? ',
              link: '/interview/fs',
            },
            {
              text: 'Node中的全局对象有哪些？',
              link: '/interview/global',
            },
            {
              text: 'JSX转真实DOM过程',
              link: '/interview/jsxToDOM',
            },
            {
              text: '对NodeJS理解',
              link: '/interview/nodejs',
            },
            {
              text: '说说对 Node 中的 Process 的理解？有哪些常用方法？',
              link: '/interview/process',
            },
            {
              text: 'super()和 super(props)有什么区别？',
              link: '/interview/super',
            },
            {
              text: 'TCP为什么是三次握手和四次挥手',
              link: '/interview/tcp',
            },
            {
              text: '说说地址栏输入 URL 敲下回车后发生了什么?',
              link: '/interview/url',
            },
            {
              text: 'JavaScript 中的 Var，Let 和 Const 有什么区别',
              link: '/interview/variable',
            },
            {
              text: '一文搞懂 Web 常见的攻击方式',
              link: '/interview/webAttack',
            },
            {
              text: '说说对WebSocket的理解',
              link: '/interview/websocket',
            },
          ],
        },
      ],
      '/question/': [{ text: 'object undefined is not iterable', link: '/question/destructuringAssignment' }],
      '/other/': [
        {
          text: 'charles抓包',
          link: '/other/charles',
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
