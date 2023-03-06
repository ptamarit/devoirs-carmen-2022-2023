module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/robots.txt');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
