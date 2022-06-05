import path from 'path';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['.'],
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': path.resolve(__dirname, 'src/$1'),
  },
};

export default config;
