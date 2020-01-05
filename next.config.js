const withCSS = require('@zeit/next-css')
if (typeof require !== 'undefined') {
  // 服务端环境
  require.extensions['.css'] = file => {} // node不需要处理CSS文件
}

module.exports = withCSS({})
