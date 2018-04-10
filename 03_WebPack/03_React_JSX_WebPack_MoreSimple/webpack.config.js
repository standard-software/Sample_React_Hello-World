const path = require('path');

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'build')

module.exports = {
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  },

  plugins: []
}