module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  productionSourceMap: false,
  runtimeCompiler: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'vue3-router-tab',
    },
  },
  chainWebpack: (config) => {
    // https://stackoverflow.com/questions/62150392/how-disable-link-async-module-prefetch-preload-by-default-with-vue-cli-4-3
    // Use this syntax if not using multipage setup
    // config.plugins.delete('preload-index');
    // config.plugins.delete('prefetch-index');

    config.plugins.delete('fork-ts-checker');

    if (process.env.NODE_ENV === 'production') {
      config.externals({
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
      });
    }
  },
};