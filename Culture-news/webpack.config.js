const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const fileName = (ext = '[ext]') => isDev ? `[name].${ext}` : `[name]-[contenthash].${ext}`;

module.exports = {
  entry: ['./src/index.js', './src/styles.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: fileName('js'),
  },
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader', 
          options: { 
            presets: [ '@babel/preset-env' ] 
          }, 
        },
      },
      { 
        test: /\.html$/, 
        use: [ 
          { 
            loader: 'html-loader', 
            options: { 
              interpolate: true 
            }, 
          }, 
        ],
      },
      { 
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          { 
            loader: 'file-loader', 
            options: { 
              outputPath: './img/',
              name: fileName(), 
              esModule: false,
              emitFile: true, 
            }, 
          },
          { 
            loader: 'image-webpack-loader', 
            options: { 
              disable: isDev 
            }, 
          }, 
        ], 
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './fonts/', 
              name: fileName(), 
              esModule: false,
              emitFile: true,
            }
          }
        ],
      },
      { 
        test: /\.scss$/, 
        use: [ 
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader', 
          { 
            loader: 'postcss-loader',
            options: {
              plugins: [ 
                // require('autoprefixer'), 
                require('postcss-combine-duplicated-selectors'),
              ],
            }, 
          }, 
          'resolve-url-loader', 
          'sass-loader' 
        ], 
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: { 
        collapseWhitespace: isProd,
        removeComments: isProd,
      }, 
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css'),
    }),
  ],
};