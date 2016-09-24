'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssVip = require("gulp-css-vip"); // adds !important to all css lines

gulp.task( 'default', () => {
  gulp.src('./style.scss', { base: './' })
    .pipe( sass().on('error', sass.logError) )
    .pipe( cssVip() )
    .pipe( gulp.dest('./sass') )
} );
