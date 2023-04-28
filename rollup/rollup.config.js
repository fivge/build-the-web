import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      format: "cjs",
      dir: "dist/"
    },
    // [!] Error: UMD and IIFE output formats are not supported for code-splitting builds
    // {
    //   // file: "bundle.min.js",
    //   format: "iife",
    //   name: "version",
    //   // plugins: [terser()],
    //   dir: "dist/"
    // }
  ],
  plugins: [json()]
};
