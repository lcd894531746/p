
// 使用等比适配插件
module.exports = {

  configureWebpack: {
    externals: {
      './cptable': 'var cptable'
    },
  },
  devServer: {
    port: 9000 // 修改为你想要的端口号
  },
  lintOnSave: true,
  // 此三行代码是为项目打包运行所写----
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  //---------------------------
  css: {
    loaderOptions: {
      postcss: {
      },
    },
  },
};

