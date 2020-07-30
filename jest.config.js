module.exports = {
  roots: [
    '.',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};
