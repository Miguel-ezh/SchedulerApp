var gulp = require('gulp');
var server = require('gulp-express');
var sass = require('gulp-sass');

gulp.task('run-server', function () {
    // Start the server at the beginning of the task 
    server.run(['server.js']);

    gulp.watch(['app.js', 
        'server.js', 
        'routes/**/*.js', 
        'models/**/*.js'
       ], [server.run]);
});

gulp.task('sass', function () {
  gulp.src('./sass/base.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('app:watch', function(){
  gulp.watch(['app/index.html'], server.notify);
  gulp.watch(['app/**/*.html'], server.notify);
  gulp.watch(['app/**/*.js'], server.notify);
  gulp.watch(['app/**/**/*.js'], server.notify);
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['run-server','app:watch', 'sass:watch']);