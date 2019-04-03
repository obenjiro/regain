module.exports = {
  name: `Click "Make report" -->`,
  data: () => {
    return require("./regain/crawler").default("./src", {
      exclude: /(node_modules|tests)/,
      extensions: /\.(ts|js|json)$/
    });
  },
  cache: false,
  //cache: __dirname + "/regain/.cache",
  prepare: __dirname + "/regain/prepare.js",
};
