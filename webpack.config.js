const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const data = require('./data.js')

module.exports = (env) => {
  console.log(env)
  const dest = path.resolve(__dirname, './public')

  return {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      filename: '[name].bundle.js',
      path: dest
    },
    resolve: {
      modules: [
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, './bower_components')
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, './src/index.ejs'),
        inject: false,
        filename: 'index.html',
        data
      }),
      new ExtractTextPlugin('style.css'),
      new StyleExtHtmlWebpackPlugin({
        position: 'head-bottom'
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './bower_components/webcomponentsjs/*.js'),
          to: 'bower_components/webcomponentsjs/[name].[ext]'
        },
        {
          from: path.resolve(__dirname, './bower_components/webcomponentsjs/*.map'),
          to: 'bower_components/webcomponentsjs/[name].[ext]'
        },
        {
          from: path.resolve(__dirname, './src/images/'),
          to: 'images/'
        }

      ])
    ],
    module: {
      rules: [
        {
          // If you see a file that ends in .html, send it to these loaders.
          test: /\.html$/,
          // This is an example of chained loaders in Webpack.
          // Chained loaders run last to first. So it will run
          // polymer-webpack-loader, and hand the output to
          // babel-loader. This let's us transpile JS in our `<script>` elements.
          use: [
            {
              loader: 'babel-loader',
              options: {
                comments: true
              }
            },
            {
              loader: 'polymer-webpack-loader',
              options: {
                processStyleLinks: true
              }
            }
          ]
        },
        {
          // If you see a file that ends in .js, just send it to the babel-loader.
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                comments: true
              }
            }
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                useRelativePath: true,
                name: '[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                gifsicle: {
                  optimizationLevel: 2
                },
                optipng: {
                  optimizationLevel: 5
                },
                mozjpeg: {
                  quality: 70,
                  progressive: true
                },
                svgo: {
                  plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                  ]
                },
                webp: {
                  quality: 70,
                  method: 5,
                  size: 60000
                }
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader'
            }
          ]
        }
      ]
    }
  }
}