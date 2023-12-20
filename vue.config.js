const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
      proxy: {
          '/api': {
              target: 'https://api.chatanywhere.com.cn',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': '/v1'
              }
          }
      }
  }
})
