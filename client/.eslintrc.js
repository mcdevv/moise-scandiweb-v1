module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',

    requireConfigFile: false,
  },
  extends: [
    // "airbnb",
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'no-shadow': 'off',
    // "prettier/prettier": "error"
  },
  ignorePatterns: ['dist/', 'build/'],
};
