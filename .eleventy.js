module.exports = config => {
  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "layouts",
      includes: "includes",
      data: "data"
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
