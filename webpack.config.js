// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const TerserWebpackPlugin = require('terser-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// module.exports = function (_env, argv) {
//   const isProduction = argv.mode === 'production';
//   const isDevelopment = !isProduction;

//   return {
//     devtool: isDevelopment && 'cheap-module-source-map',
//     entry: './src/index-experimental.js',
//     output: {
//       path: path.resolve(__dirname, 'build/experimental'),
//       filename: 'assets/js/[name].js',
//       publicPath: '',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.jsx?$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory: true,
//               cacheCompression: false,
//               envName: isProduction ? 'production' : 'development',
//             },
//           },
//         },
//         {
//           test: /\.css$/i,
//           use: [
//             isProduction ? MiniCssExtractPlugin.loader : 'to-string-loader',
//             'css-loader',
//             'postcss-loader',
//           ],
//         },
//         {
//           test: /\.s[ac]ss$/i,
//           use: [
//             isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
//             'css-loader',
//             'sass-loader',
//           ],
//         },
//         {
//           test: /\.(png|jpg|gif)$/i,
//           use: {
//             loader: 'url-loader',
//             options: {
//               limit: 8192,
//               name: 'static/media/[name].[hash:8].[ext]',
//             },
//           },
//         },
//         {
//           test: /\.svg$/,
//           use: ['@svgr/webpack'],
//         },
//         {
//           test: /\.(eot|otf|ttf|woff|woff2)$/,
//           loader: require.resolve('file-loader'),
//           options: {
//             name: 'static/media/[name].[hash:8].[ext]',
//           },
//         },
//       ],
//     },
//     resolve: {
//       extensions: ['.js', '.jsx'],
//     },
//     plugins: [
//       isProduction &&
//         new MiniCssExtractPlugin({
//           filename: 'assets/css/[name].css',
//           chunkFilename: 'assets/css/[name].chunk.css',
//         }),
//       new HtmlWebpackPlugin({
//         template: path.resolve(__dirname, 'public/index.html'),
//         inject: true,
//       }),
//       new webpack.DefinePlugin({
//         'process.env.NODE_ENV': JSON.stringify(
//           isProduction ? 'production' : 'development',
//         ),
//       }),
//     ].filter(Boolean),
//     optimization: {
//       minimize: isProduction,
//       minimizer: [
//         new TerserWebpackPlugin({
//           terserOptions: {
//             compress: {
//               comparisons: false,
//             },
//             mangle: {
//               safari10: true,
//             },
//             output: {
//               comments: false,
//               ascii_only: true,
//             },
//             warnings: false,
//           },
//         }),
//         new CssMinimizerPlugin(),
//       ],
//       splitChunks: {
//         chunks: 'all',
//         minSize: 0,
//         maxInitialRequests: 10,
//         maxAsyncRequests: 10,
//         cacheGroups: {
//           vendors: {
//             test: /[\\/]node_modules[\\/]/,
//             name(module, chunks, cacheGroupKey) {
//               const packageName = module.context.match(
//                 /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
//               )[1];
//               return `${cacheGroupKey}.${packageName.replace('@', '')}`;
//             },
//           },
//           common: {
//             minChunks: 2,
//             priority: -10,
//           },
//         },
//       },
//       runtimeChunk: 'single',
//     },
//     devServer: {
//       port: 3000,
//       compress: true,
//       historyApiFallback: true,
//       open: true,
//       client: {
//         overlay: true,
//       },
//     },
//   };
// };
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;
  const buildType = process.env.BUILD_TYPE || 'experimental';

  return {
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: {
      main: buildType === 'stable' 
        ? './src/stable/index-stable.js'
        : './src/index-experimental.js'
    },
    output: {
      path: path.resolve(__dirname, `build/${buildType}`),
      filename: 'assets/js/[name].[contenthash].js',
      chunkFilename: 'assets/js/[name].[contenthash].chunk.js',
      publicPath: '',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? 'production' : 'development',
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'to-string-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  auto: true,
                  localIdentName: isProduction
                    ? '[hash:base64]'
                    : '[path][name]__[local]',
                },
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8192,
            },
          },
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name].[hash][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@stable': path.resolve(__dirname, 'src/stable'),
        '@experimental': path.resolve(__dirname, 'src/experimental'),
        '@shared': path.resolve(__dirname, 'src/shared'),
      },
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[contenthash].css',
          chunkFilename: 'assets/css/[name].[contenthash].chunk.css',
        }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        inject: true,
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : undefined,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProduction ? 'production' : 'development'
        ),
        'process.env.BUILD_TYPE': JSON.stringify(buildType),
      }),
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      runtimeChunk: 'single',
    },
    performance: {
      hints: isProduction ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    devServer: {
      port: 3000,
      compress: true,
      historyApiFallback: true,
      open: true,
      client: {
        overlay: true,
      },
    },
  };
};