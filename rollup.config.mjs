import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import scss from 'rollup-plugin-scss';

export default {
  input: "src/index.ts",
  output: [
    {
      file: "./lib/cjs/styles.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./lib/esm/styles.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
        extensions: [ '.scss']
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      include: ["src/**/*.{ts,tsx}"],
      declaration: true,
      declarationDir: "lib/esm",
      exclude: ["**/__tests__/**"],
      compilerOptions: {
        rootDir: "./src",
      },
    }),
    // sass({ insert: true }),
    postcss({
      extract: true,
      modules: {
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
      use: ["sass"],
      extract: "lib/css/styles.css",
      autoModules: true,
      sourceMap: true,
    }),
  ],
  external: ["react", "react-dom"],
};
