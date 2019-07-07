'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/style/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/style'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/style/**/*.s*ss', gulp.series('sass'));
});
