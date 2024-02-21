
// 使用等比适配插件
module.exports = {

  configureWebpack: {
    externals: {
      './cptable': 'var cptable'
    },
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

