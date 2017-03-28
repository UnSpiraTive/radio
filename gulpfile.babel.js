'use strict';
// =================MODULES===========
import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import util from 'gulp-util';
import concat from 'gulp-concat';
import bs from 'browser-sync';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
// import ts from 'gulp-typescript';


// =====================VARIABLES==============
let browserSync = bs.create();

// ===================SERVER====================
gulp.task('develop', () => {
        nodemon({
          script: 'server.js',
          "execMap": {
              "js": "node",
        }
        })
        .on('restart', () => {
          console.log('Succes');
        })
});
// ====================TYPESCRIPS==========

// gulp.task('type', () => {
//   gulp.src('public/ts/*.ts')
//   .pipe(plumber())
//   .pipe(ts())
//   .pipe(gulp.dest('public/js/'));
//   gulp.src('public/ts/services/*.ts')
//   .pipe(plumber())
//   .pipe(ts())
//   .pipe(gulp.dest('public/js/services/'));
// });

// ====================SCRIPTS==========

gulp.task('scripts',() => {
  gulp.src([
    'public/js/**/*.js',
     '!public/js/**/*.min.js'
   ])
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(concat('main.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(sourcemaps.write('./' ))
  .pipe(gulp.dest('public/js/'));
});


// =====================STYLE======================
gulp.task('style', () => {
  gulp.src('public/css/less/main.less')
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(less({
    compress: true
  }))
  .pipe(autoprefixer(['last 2 version']))
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./' ))
  .pipe(gulp.dest('public/css/'))
  .pipe(browserSync.stream())
});

// =========================browserSync===============

gulp.task('browser-sync', () => {
  browserSync.init({
  		proxy: "http://localhost:8080",
          files: ["public/**/*.css"],
          port: 7000,
  	});
});



// =====================WATCH=========

gulp.task('watch', () => {
    gulp.watch('public/js/**/*.js', ['scripts']);
    gulp.watch('public/ts/**/*.ts', ['type']);
    gulp.watch('public/css/less/**/*.less', ['style']);
    gulp.watch('public/**/*.html').on('chanege', browserSync.reload);
});

// ===================DEFAULT=========
gulp.task('default', ['scripts', 'watch', 'develop', 'style', 'browser-sync']);
