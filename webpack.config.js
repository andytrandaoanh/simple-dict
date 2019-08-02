const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',        
        chunkFilename: '[name].js',
        publicPath: '/'
        
    },

    devServer: {
      port: 3000, 
      historyApiFallback: true,
      contentBase: './',
      hot: true

      
    },


    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(css|scss)/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: "file-loader"
        }
      ]
    },

    resolve: {
      extensions: ['*', '.js', '.jsx']
    },

    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new htmlPlugin(
          {
            template: path.join(__dirname,'/src/index.html'),
            filename: './index.html'
          }
      )
    ],

   optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
                chunks: 'all',
                test: /node_modules/
        }
      }
    }
  }    

};
