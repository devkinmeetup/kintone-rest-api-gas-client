import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts',
  output: {
    file: 'app/main.js',
    format: 'es',
    exports: 'none'
  },
  plugins: [
    typescript({
      target: 'es2019',
      module: 'esnext'
    })
  ],
  external: []
};
