module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true, // Tells to Eslint that we are using Jest
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  plugins: ['jest'],
  settings: {
    jest: {
      version: 29,
    },
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
  },
};
