const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  },
  cssModules: true
});

const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
  })],
};
