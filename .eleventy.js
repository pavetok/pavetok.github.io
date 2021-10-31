const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");
const assert = require("assert");
const markdownIt = require("markdown-it");

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
