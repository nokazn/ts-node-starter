# typescript-starter

## setting environmental variables

```bash
$ echo PORT=3000 > .env
```

## scripts

### format

```bash
$ yarn format
```

### lint

```bash
$ yarn lint

# auto fix
$ yarn lint:fix
```

### dev

```bash
$ yarn dev

# hot reload
$ yarn dev:watch
```

### test

```bash
$ yarn test
```

### build

```bash
$ yarn build
```

### start

```bash
$ yarn start
$ curl localhost:8000
Hello World!
```

## eslint

eslint 関連の各種プラグインなどをインストールする。

```bash
$ yarn add -D @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb-base \
  eslint-plugin-import
```

## prettier

prettier 関連の各種プラグインなどをインストールする。

```bash
$ yarn add -D prettier \
  eslint-config-prettier
```

eslint との競合を防ぐため、`.eslintrc.js`を修正する。

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

## jest

```bash
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
