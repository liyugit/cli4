const fs = require('fs');
function costTimePlugin(options) {
  this.options = options;
  this.modules = {};
  this.name = "costTimePlugin";
  this.fileName = 'costTimePlugin.json';
}
costTimePlugin.prototype.apply = function (compiler) {
  //监听compiler的compilation钩子
  compiler.hooks.compilation.tap(this.name, (compilation) => {
    //监听模块“开始编译”钩子
    compilation.hooks.buildModule.tap(this.name, (module) => {
      let resource = module.resource;
      if (resource) {
        this.modules[resource] = {};
        this.modules[resource].begin = new Date().getTime();
      }
    });
    //监听模块“完成编译”钩子
    compilation.hooks.succeedModule.tap(this.name, (module) => {
      let resource = module.resource;
      if (!resource) {
        return;
      }
      let lastResource = this.modules[resource];
      if (lastResource && lastResource.begin) {
        let lastTime = lastResource.begin; 
        let cost = new Date().getTime() - lastTime;
        this.modules[resource].cost = cost;
      }
    });
    //监听模块“编译错误”钩子
    compilation.hooks.failedModule.tap(this.name, (module, error) => {
      console.log(this.name  + 'error:' + JSON.stringify(error));
    });
  });
  //监听完成编译的钩子，输出结果
  compiler.hooks.done.tap(this.name, () => {
    const currentDir = __dirname;
    let result = [];
    result = Object.keys(this.modules).map((path) => {
      let item = this.modules[path];
      return {
        path: path.replace(currentDir, ''),
        begin: item.begin,
        cost: item.cost,
      };
    });
    let nodeModules = result.filter((item) => {
      return item.path.match(/node_modules/);
    });
    let srcModules = result.filter((item) => {
      return !item.path.match(/node_modules/);
    });
    result = {
      srcModules,
      nodeModules,
    };
    result = JSON.stringify(result,'',2);
    fs.writeFileSync(this.fileName, result);
    console.log(result);
  });
};
module.exports = costTimePlugin;
