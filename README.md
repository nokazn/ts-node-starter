# typescript-starter

## Scripts

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

## ESLint

ESLint 関連の各種プラグインなどをインストールする。

```bash
$ yarn add -D @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb-base \
  eslint-plugin-import
```

## Prettier

Prettier 関連の各種プラグインなどをインストールする。

```bash
$ yarn add -D prettier \
  eslint-config-prettier
```

ESLint との競合を防ぐため、`.eslintrc.js`を修正する。

```diff:.eslintrc.js
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

## License

MIT
