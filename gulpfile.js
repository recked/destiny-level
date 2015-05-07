
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', ['build']);

gulp.task('build', ['build:style']);

gulp.task('build:style', function () {
  return sass('src/scss/main.scss', {
    style: 'compressed'
  }).pipe(gulp.dest('css'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('src/scss/**/*.scss', ['build:style']);
});