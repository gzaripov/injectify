module.exports = {
  entry: "./spec/index.spec.js",
  mode: 'production',

  output: {
    // Make sure to use [name] or [id] in output.filename
    //  when using multiple entry points
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js",
    path: __dirname + "/dist"
  },
  devtool: "inline-source-map",

  module: {
    rules: [{ test: /\.hbs/, loader: __dirname + '/index.js?{"test": 1}' }]
  }
};
