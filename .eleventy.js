module.exports = config => {
  config.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
