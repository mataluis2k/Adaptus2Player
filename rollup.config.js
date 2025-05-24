import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [

  {
    input: 'Adaptus2Player.js',            // your entrypoint 
    output: {
      file: 'dist/adaptus2-player.umd.js',
      format: 'umd',
      name: 'Adaptus2Player',              // global var when loaded via <script>
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),                             // minify
    ]
  },


  {
    input: 'Adaptus2Player.js',
    output: {
      file: 'dist/adaptus2-player.esm.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
    ]
  }
];
