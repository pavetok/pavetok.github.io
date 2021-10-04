const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/assets");

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
