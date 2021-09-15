const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const CostTimePlugin = require('./cost-time-plugin');
module.exports = {
  pages:{
    index:'src/main.js',
    'cost-time':'src/entrys/cost-time.js'
  },
  configureWebpack(config) {
    config.devtool = 'eval';
  },
  chainWebpack (config) {
    config.module.rule('eslint').use('eslint-loader')
    .tap((options) => {
        options.fix = true;
        return options;
    });
  }
};
