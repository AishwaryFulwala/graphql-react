module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-duplicate-imports': 2,
    'no-undef-init': 'error',
    camelcase: [2, { properties: 'never', ignoreDestructuring: true }],
    'lines-between-class-members': ['warn', 'always'],
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],
    'no-trailing-spaces': 'warn',
    'react/sort-comp': [2],
    'constructor-super': 'error'
  }
};
