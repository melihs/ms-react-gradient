import css from "rollup-plugin-import-css";
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/TextGradient/TextGradient.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    css(),
    nodeResolve(),
    typescript({ module: "ESNext" }),
  ],
  external: ['react'],
};
