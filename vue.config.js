const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        "@": path.resolve("src"),
      },
    },
  },
};
