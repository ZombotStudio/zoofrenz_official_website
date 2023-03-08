const { defineConfig } = require('@vue/cli-service')
// const nodeExternals = require('webpack-node-externals');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
      },
    },    
  },
})

