var gulp = require("gulp");
var concat = require("gulp-concat");
var del = require("del");
var path = require("path");
var sass = require("gulp-sass");
const webpack = require("webpack-stream");

let handleCSS = function () {
  return gulp
    .src("./src/**/*.css")
    .pipe(webpack())
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

exports.gulp.task(
  "default",
  gulp.series(cleanDistFolder, handlePics, handleCSS, toSass)
);
