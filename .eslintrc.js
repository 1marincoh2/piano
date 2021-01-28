module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'quotes': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'semi': 'off',
    'no-multiple-empty-lines': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',

  }
}
