const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const CostTimePlugin = require('./cost-time-plugin');
module.exports = {
  configureWebpack(config) {
    config.devtool = 'eval';
  },
  chainWebpack (config) {
    config
      .plugin('speed-measure-webpack-plugin')
      .use(SpeedMeasurePlugin)
      .end();
    config
      .plugin('cost-time-plugin')
      .use(CostTimePlugin)
      .end();
  }
};
