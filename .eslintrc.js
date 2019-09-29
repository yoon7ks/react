module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: "airbnb",
  plugins: [
      "react"
  ],
  parser: 'babel-eslint',
  rules: {
    "comma-dangle": ["error", "never"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
