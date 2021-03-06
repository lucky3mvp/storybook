module.exports = {
  extends: [
    './node_modules/eslint-config-airbnb-base/rules/es6.js',
  ],
  plugins: [
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    strict: 0,
    'prettier/prettier': ['warn', {
      printWidth: 100,
      tabWidth: 2,
      bracketSpacing: true,
      trailingComma: 'es5',
      singleQuote: true,
    }],
    quotes: ['warn', 'single'],
    'arrow-parens': ['warn', 'as-needed'],
  },
}
