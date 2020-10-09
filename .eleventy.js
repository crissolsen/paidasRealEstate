module.export = function (eleventyConfig) {

  return {
    passThroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };
};
