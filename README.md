# typescript-starter

## setting environmental variables

```bash
# add `PORT` as an environment variable
$ echo PORT=3000 > .env
```

## npm scripts

### Static check

```bash
# Run formatter, linter & type checking
$ yarn static-check

# Prettier
$ yarn check:format
# Prettier (with auto fix)
$ yarn fix:format

# ESLint
$ yarn check:lint
# ESLint (with auto fix)
$ yarn fix:lint

# tsc
$ yarn check:type

# Jest
$ yarn test
```

### Development

```bash
# Run development server
$ yarn dev
# Run development server (with hot reload)
$ yarn dev:watch

# Build files under `./src` dir
$ yarn build
```

### Start

```bash
# Run Node.js server in the background
$ yarn start &
$ curl localhost:8000
Hello World!
```

## ESLint

ESLint 関連の各種プラグインなどをインストールする。

```bash
# Install dependencies related to ESLint
$ yarn add -D @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb-base \
  eslint-plugin-import
```

## Prettier

Prettier 関連の各種プラグインなどをインストールする。

```bash
# Install dependencies related to Prettier
$ yarn add -D prettier \
  eslint-config-prettier
```

ESLint との競合を防ぐため、`.eslintrc.js`を修正する。

```diff
// .eslintrc.js
 extends: [
+ "prettier",
+ "prettier/@typescript-eslint",
 ]
```

`.prettierrc.json` に適宜設定する。

```json:.prettierrc.json
{
  "printWidth": 100,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "all"
}
```

## Jest

```bash
# Install dependencies related to Jest
$ yarn add -D jest ts-jest eslint-plugin-jest @types/jest
```

```js:jest.config.js
module.exports = {
  roots: ['.'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};
```

ESLint rules for Jest

```diff
// .eslintrc.js
 env: {
   es6: true,
   node: true,
+  'jest/globals': true,
 },

 // ...

- plugins: ['@typescript-eslint'],
+ plugins: ['@typescript-eslint','jest'],
```

## License

MIT
