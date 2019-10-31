const compiler = require("./helpers/compiler");

describe.skip("webpackLoader", async () => {
  const result = await compiler("fixture/js/absolute-import.js", {
    loader: {
      test: /\.js$/,
      use: {
        loader: path.resolve(__dirname, "../lib/webpack-loader"),
        options: (config.loader && config.loader.options) || {}
      }
    }
  });
});
