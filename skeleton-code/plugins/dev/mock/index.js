const injections = require('../../../mock');

/** https://umijs.org/zh-CN/plugins/api#addhtmlheadscripts */
module.exports = definePlugin({
  id: 'mock',

  async describe(context) {
    // console.log('[plugin][mock] describe');
  },

  async activate(context) {
    const injectionNames = Object.keys(injections);
    console.log('[plugin][mock] activate: ' + injectionNames.join(', '));

    injectionNames.forEach((fnName) => {
      const body = injections[fnName];

      context[fnName](body);
    })
  },

  async dispose() {
    // console.log('[plugin][mock] dispose');
  },
});
