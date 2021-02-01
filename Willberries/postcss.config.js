module.exports = {
  plugins: [
    require('postcss-combine-duplicated-selectors'),
    require("css-mquery-packer"),
    require('autoprefixer'),
  ],
};