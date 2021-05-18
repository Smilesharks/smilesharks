// "use strict";
// const gulp = require("gulp");
// const browsersync = require("browser-sync").create();
// const plumber = require("gulp-plumber");
// const rename = require("gulp-rename");
// const uglify = require('gulp-uglify');
// const concat = require('gulp-concat');
// gulp.task('scripts', function() {
//     return gulp.src(['assets/js/**/*.js'])
//         .pipe(concat('main.js'))
//         // .pipe(uglify())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('assets/js/'));
// });
// var gulp = require('gulp');
// var imageminWebp = require('imagemin-webp');
// var imageResize = require('gulp-image-resize');
// var notify = require('gulp-notify');
// var os = require('os');
// var parallel = require('concurrent-transform');
// var pipes = require('gulp-pipes');

// gulp.task('resize_images', function() {

//     var sizes = [100,300,800,1000,2000];
//     var stream;

//     for (size in sizes) {
//         stream = gulp.src('assets/img/2020/**/*.{jpg,png,tiff}')
//             .pipe(parallel(
//                     imageResize({
//                         width:  sizes[size],
//                         height: sizes[size],
//                         upscale: false
//                 }),
//                 os.cpus().length
//             ))
//            .pipe(pipes.image.optimize())
//            .pipe(gulp.dest('assets/img/2020/derivative/' + sizes[size] + '/'))
//            .pipe(imageminWebp({quality: 75})())
//            .pipe(gulp.dest('assets/img/2020/derivative/' + sizes[size] + '/'))
//    }
//    return stream;
// });

var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
 
gulp.task('default', function () {
  gulp.src('assets/img/pro/**/*.{jpg,png,tiff}')
    .pipe(imageResize({
      width : 200,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('assets/img/thumbs'));
});