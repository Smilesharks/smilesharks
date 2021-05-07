"use strict";
const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
gulp.task('scripts', function() {
    return gulp.src(['assets/js/**/*.js'])
        .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/js/'));
});