const del = require("del");
const path = require("path");
const webpack = require("webpack");
const MemoryFS = require("memory-fs");

const module = config => {
  return {
    rules: config.rules ? config.rules : config.loader ? config.loader : []
  };
};

const plugins = config => [].concat(config.plugins || []);

const output = config => {
  return {
    path: path.resolve(
      __dirname,
      `../outputs/${config.output ? config.output : ""}`
    ),
    filename: "[name].bundle.js"
  };
};

module.exports = function(fixture, config, options) {
  // webpack Config
  config = {
    mode: "development",
    devtool: config.devtool || "sourcemap",
    context: path.resolve(__dirname, "..", "fixtures"),
    entry: `./${fixture}`,
    output: output(config),
    module: module(config),
    plugins: plugins(config),
    optimization: {
      runtimeChunk: true
    }
  };
  // Compiler Options
  options = Object.assign({ output: false }, options);

  if (options.output) del.sync(config.output.path);

  const compiler = webpack(config);

  if (!options.output) compiler.outputFileSystem = new MemoryFS();

  return new Promise((resolve, reject) =>
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    })
  );
};
