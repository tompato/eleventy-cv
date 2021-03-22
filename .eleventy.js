const toml = require("toml");

module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addDataExtension("toml", contents => toml.parse(contents));
    eleventyConfig.setTemplateFormats(["njk"]);
    eleventyConfig.addPassthroughCopy({ "src/_includes/img" : "img" });
    eleventyConfig.addPassthroughCopy({ "src/_includes/css" : "css" });
    eleventyConfig.addPassthroughCopy({ "src/_includes/js" : "js" });
    return {
        dir: {
            input: 'src',
            output: 'build',
        },
    };
};