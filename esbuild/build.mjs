import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["../@source/node/app.jsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: "node",
  target: ["node16"],
  // packages: "external",
  outfile: "../dist/esbuild/node/out.js",
});
