import gulp from "gulp";
const { series, parallel, src, dest, task } = gulp;

const clean = (cb) => {
  console.log("clean");
  cb();
  return;
};

// callback
const build = (cb) => {
  console.log("build");
  cb();
  return;
};

// task(clean)
task("clean", clean);
task("build", build);

task("default", series("clean", "build"));
