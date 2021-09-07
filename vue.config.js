module.exports = {
    devServer: {
      proxy: {
          '/api':{
              target:'https://www.iconfont.cn',
          },
      }
    }
  }