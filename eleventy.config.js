module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};