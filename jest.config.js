const path = require('path');

module.exports = {
  roots: ['.'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '^~/(.*)$': path.resolve(__dirname, 'src/$1'),
  },
};
