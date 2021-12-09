import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const dist = 'dist';
const bundle = 'bundle';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      name: 'ReactCssSpinners',
      file: `${dist}/${bundle}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    nodeResolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      babelHelpers: 'bundled'
    }),
    production && terser()
  ]
};
