var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('useref', function () {
  return gulp.src('index.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist/app/assets'))
});

gulp.task('images', function () {
  return gulp.src('app/assets/images/*')
    .pipe(gulp.dest('dist/app/assets/images'))
});

gulp.task('htmlmodules', function () {
  return gulp.src('app/modules/**/views/*.html')
    // Minifies only if it's a html file
    .pipe(gulpIf('*.html', htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest('dist/app/assets/modules'))
});

gulp.task('clean:dist', function() { 
   return del(['.tmp', 'dist/*'], { dot: true })
});

gulp.task('default', function (callback) {
  runSequence('clean:dist',
    ['useref', 'images', 'htmlmodules'],
    callback
  )
})
