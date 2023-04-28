import gulp from "gulp";
const { series, parallel, src, dest, task } = gulp;

// callback
const clean = (cb) => {
  console.log("clean");
  cb();
};

const build = () => {
  console.log("build");
  return src("../@source/node/app.jsx").pipe(dest("dist"));
};

task("clean1", clean);
task(clean)
task(build);

task("default", series("clean", "build"));
