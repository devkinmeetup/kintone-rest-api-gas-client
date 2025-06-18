import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/code.gs',
    format: 'iife',
    name: 'MyLibrary',
  },
  plugins: [typescript()],
};