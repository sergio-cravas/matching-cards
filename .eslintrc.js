module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  plugins: ['react', 'react-native', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    '@typescript-eslint/naming-convention': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  globals: {
    fetch: false,
  },
};
