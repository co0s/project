import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jest from 'eslint-plugin-jest';

export default [
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  {
    rules: {
      'no-var': 'error',
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: [' .node_modules/', 'dist/'],
  },
  {
    files: ['**/*.{js,jsx}'],
  },
  {
    files: ['**/*.test.js'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
];

// {
//   extends: ['eslint:reccomended ', 'plugin:jest/recommended', 'prettier']
// },

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];
