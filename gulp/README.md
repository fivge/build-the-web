# gulp

gulp 自动加载 `gulpfile.js`, 任何导出（export）的函数都将注册到 gulp 的任务（task）系统中

## API

> `series()` `parallel()`

`series()` 按顺序执行

`parallel()` 并发执行

`series()`和`parallel()`可以互相嵌套

> `src()` `dest()` `pipe()`

```js
return src("src/*.js").pipe(babel()).pipe(dest("output/"));
```

## async

```js
// stream
function streamTask() {
  return src("*.js").pipe(dest("output"));
}

// Promise
function promiseTask() {
  return Promise.resolve("the value is ignored");
}

// async/await
async function asyncAwaitTask() {
  const { version } = fs.readFileSync("package.json");
  console.log(version);
  await Promise.resolve("some result");
}

// event emitter
function eventEmitterTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit("finish"), 250);
  return emitter;
}

// child process
const { exec } = require("child_process");

function childProcessTask() {
  return exec("date");
}

// observable
function observableTask() {
  return Observable.of(1, 2, 3);
}

// callback
// task不返回任何内容
function callbackTask(cb) {
  // `cb()` should be called by some async work
  cb();
}

// callback错误处理
function callbackError(cb) {
  // `cb()` should be called by some async work
  cb(new Error("kaboom"));
}

// callback传递
function passingCallback(cb) {
  fs.access("gulpfile.js", cb);
}
```

## watch

```js
// The task won't be run until 500ms have elapsed since the first change
watch("src/*.js", { delay: 500 }, function (cb) {
  // body omitted
  cb();
});
```
