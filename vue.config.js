module.exports = {
    devServer: {
      proxy: {
          '/api':{
              target:'https://market.douban.com',
          },
          '/j':{
            target:'https://movie.douban.com',
          }
      }
    }
  }