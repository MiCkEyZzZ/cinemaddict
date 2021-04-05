const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: `all`
    }
  }

  return config
}

const filename = ext => isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        esModule: true,
      },
    },

    'css-loader',
    'sass-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: [
      ['@babel/plugin-proposal-class-properties', {loose: true}],
      ['@babel/plugin-proposal-private-methods', {loose: true}],
      ['@babel/plugin-syntax-class-properties', {loose: true}]
    ]
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions()
    }
  ]

  if (isDevelopment) {
    loaders.push('eslint-loader')
  }

  return loaders
}

const plugins = () => {
  const base = [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProduction
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist')}
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
      chunkFilename: filename('css')
    })
  ]

  if (isProduction) {
    base.push(new BundleAnalyzerPlugin())
  }

  return base
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './main.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4000,
    compress: true,
    hot: isDevelopment,
    overlay: true
  },
  devtool: isDevelopment ? 'source-map' : false,
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders()
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      }
    ]
  }
}