module.exports = {
  // other config options
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "<rootDir>/__mocks__/cssTransform.js"
  }
};

module.exports = {
  // other Jest configuration options...
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  moduleFileExtensions: ["js", "jsx", "json", "node"]
};
