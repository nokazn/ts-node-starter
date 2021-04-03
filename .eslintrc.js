const ALLOW = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.test.json'],
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    // switch 文での prettier との競合を防ぐ
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'lines-between-class-members': ALLOW,
    'no-console': [WARN, { allow: ['info', 'warn', 'error'] }],

    /**
     * eslint-plugin-import
     */
    'import/extensions': [
      ERROR,
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        json: 'never',
      },
    ],
    'import/no-unresolved': [ALLOW],
    'import/no-extraneous-dependencies': [WARN, { devDependencies: true }],
    'import/prefer-default-export': ALLOW,

    /**
     * eslint と @typescript-eslint 競合を防ぐ
     */
    'no-use-before-define': ALLOW,
    '@typescript-eslint/no-use-before-define': ERROR,
    'no-unused-vars': ALLOW,
    '@typescript-eslint/no-unused-vars': ERROR,
    semi: ALLOW,
    '@typescript-eslint/semi': [ERROR],
    '@typescript-eslint/member-delimiter-style': ERROR,
    '@typescript-eslint/no-unsafe-return': ALLOW,
  },
};
