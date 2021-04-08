import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer';
import discardComments from 'postcss-discard-comments';

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    json(),
    url({ include: ['**/*.ttf', '**/*.png', '**/*.jpg', '**/*.svg'], limit: Infinity }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({ plugins: [autoprefixer(), discardComments()], minimize: true }),
  ],
}
