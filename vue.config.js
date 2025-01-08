const {
  defineConfig
} = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/ssbmall/' : '/'
});

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ?
//     '/ssbmall/':
//     '/'
// }