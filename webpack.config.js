const glob = require('glob');
const path = require('path');
const fs = require('fs');

const babelConfigStr = fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf-8');

const config = {
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: Object.assign({
          cacheDirectory: true,
          compact: true
        }, JSON.parse(babelConfigStr))
      }]
    }]
  },

  resolve: {
    plugins: [],
    modules: ['node_modules'],
    extensions: ['.js']
  },

  entry: {},

  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    filename: `[name].js`,
    chunkFilename: `[name].[hash].chunk.js`
  }
};

// Add an entry for each slide source file/example.
glob.sync('./src/*/index.js').forEach(src => {
  const id = src.replace('./src/', '').replace('/index.js', '');

  src = path.join(__dirname, src);

  config.entry[id] = src;
});

module.exports = config;
