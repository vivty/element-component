const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.export = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', 'json'],
      alias: {
        '@': resolve('src')
      }
    }
  }
};
