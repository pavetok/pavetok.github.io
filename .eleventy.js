const CleanCSS = require("clean-css");

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addFilter("minify", function(code) {
        return new CleanCSS({}).minify(code).styles;
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
