const { ReactLoadablePlugin } = require("react-loadable/webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  modify: (config, { target }) => {
    const conf = {
      ...config,
      plugins: [
        new CompressionPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/
        }),
        new BrotliPlugin({
          filename: "[path].br[query]",
          test: /\.js$|\.css$|\.html$/
        }),
        ...config.plugins
      ]
    };

    if (target === "web") {
      return {
        ...conf,
        plugins: [
          ...conf.plugins,
          new ReactLoadablePlugin({
            filename: "./build/react-loadable.json"
          })
        ]
      };
    }

    return config;
  }
};
