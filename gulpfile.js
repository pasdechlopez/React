var gulp = require("gulp");
var concat = require("gulp-concat");
var del = require("del");
var path = require("path");
var sass = require("gulp-sass");
bsync = require("browser-sync").create();

var log = require("fancy-log");

let handleCSS = function () {
  return gulp
    .src("./src/**/*.css")
    .pipe(concat("all.css"))
    .pipe(gulp.dest("./dist"));
};
let toSass = function () {
  return gulp
    .src("./dist/all.css")
    .pipe(concat("all.scss"))
    .pipe(gulp.dest("./assets"));
};
let cleanDistFolder = function () {
  return del(["./assets/**"]);
};
let handlePics = function () {
  return gulp.src("./src/pics/*").pipe(gulp.dest("./assets/pics"));
};

gulp.task("cleanDistFolder", cleanDistFolder);
gulp.task("handlePics", handlePics);
gulp.task("toSass", toSass);
gulp.task("handleCSS", handleCSS);

var webpackConfig = require("./webpack.config");
const webpackStream = require("webpack-stream");

let runWebpack = function () {
  return gulp
    .src("src/index.js")
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest("dist/"));
};

gulp.task("runWebpack", runWebpack);

function reloadOnDistChange() {
  bsync.init({
    server: {
      baseDir: "./dist",
      index: "index.html",
    },
  });
  gulp.watch("./dist/**/*.*").on("change", bsync.reload);
}

function sync() {
  gulp.watch("./src/**/*", runWebpack);
}

gulp.task(
  "default",
  gulp.series(
    cleanDistFolder,
    handlePics,
    handleCSS,
    toSass,
    runWebpack,
    gulp.parallel(reloadOnDistChange, sync)
  )
);
