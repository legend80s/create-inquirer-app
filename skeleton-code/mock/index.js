/**
 * addHTMLHeadScripts - 在 HTML 头部添加脚本
 */
exports.addHTMLHeadScripts = () => [
  {
    content: `
      console.error('注意：该 mock 代码不应该运行在线上环境！！！否则请赶紧下线');
      window.startupParams = ${getMockedStartupParams()};
    `,
  }
]

// 更多注入方式见：https://umijs.org/zh-CN/plugins/api#addhtmlheadscripts
// exports.addPolyfillImports = () => [];
// exports.addEntryImportsAhead = () => [];
// exports.addEntryImports = () => [];
// exports.addEntryCodeAhead = () => [];
// exports.addEntryCode = () => [];

// exports.addHTMLMetas = () => [];
// exports.addHTMLLinks = () => [];
// exports.addHTMLStyles = () => [];
// exports.addHTMLScript = () => [];
// exports.addHTMLHeadScripts = () => [];

/**
 * @returns {Partial<IStartupParams>}
 */
function getMockedStartupParams() {
  const cdpExtInfo = {
    foo: 'standard',
    bar: 'redirect',
  };

  return JSON.stringify({
    cdpPageToken: 'foo',
    spaceCode: 'bar',
    objectId: '133',
    cdpExtInfo: JSON.stringify(cdpExtInfo),
  });
}
