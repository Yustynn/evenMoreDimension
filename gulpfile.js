'use strict';

const gulp = require('gulp');

// plugins
const cssVip = require("gulp-css-vip"); // adds !important to all css styles
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const watch = require('gulp-watch');

gulp.task( 'default', () => {
  gulp.src('./sass/main.sass', { base: './' })
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe( sass().on('error', sass.logError) )
    .pipe( cssVip() )
    .pipe( rename('style.css'))
    .pipe( gulp.dest('./sass') )
} );

gulp.task( 'watch', () => {
  return gulp.watch('./sass/**/*.sass', ['default'])
} );
