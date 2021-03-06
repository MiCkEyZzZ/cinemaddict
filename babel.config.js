module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-proposal-private-methods', {loose: true}],
    ['@babel/plugin-syntax-class-properties', {loose: true}]
  ]
}