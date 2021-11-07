const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");
const assert = require("assert");
const markdownIt = require("markdown-it");
const path = require('path');
const slugify = require('@sindresorhus/slugify')
const humanize = require('humanize-string');

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addFilter("minify", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Moscow",
    }).setLocale('ru').toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addFilter("mandatory", function(value) {
    assert.ok(value);
    return value;
  });

  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("name", value => path.parse(value).name);

  eleventyConfig.addPassthroughCopy("src/**/*.png");

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("slugify", value => slugify(value, { decamelize: true }));

  eleventyConfig.addFilter("humanize", value => humanize(value))

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
    dataTemplateEngine: false,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk", "svg"]
  };
};
