const gulp = require('gulp');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');
const uglifycss = require('gulp-uglifycss');
const cleanCSS = require('gulp-clean-css');
const uglifyJs = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('src/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

//var tsProject = ts.createProject('tsconfig.json', { module: "System", outFile: 'script.js' });

//gulp.task('script', function () {
//  return gulp.src('src/**/*.ts')
//.pipe(tsProject())
//    .pipe(uglifyJs())
//    .pipe(gulp.dest('dist/js'))
//})

gulp.task('script', function () {
  return gulp.src('src/app/add-show/add-show.component.ts')
    .pipe(ts({ experimentalDecorators: true }))
    .pipe(uglifyJs())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('watch', function () {
  gulp.watch('src/*.sass', gulp.series('sass'));
  //gulp.watch('src/app/add-movie/add-movie.component.ts', gulp.series('script'));
});
