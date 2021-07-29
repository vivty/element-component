const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.export = {
  configureWebpack: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['url-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader'
      }
    ],
    resolve: {
      extensions: ['.js', '.vue', 'json'],
      alias: {
        '@': resolve('src')
      }
    }
  }
};
