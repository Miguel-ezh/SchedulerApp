var gulp = require('gulp'),
    server = require('gulp-express'),
    sass = require('gulp-sass'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');

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

gulp.task('mocha', function(){
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('test', function(){
    gulp.run('mocha');
    gulp.watch(['routes/**/*.js', 
        'models/**/*.js',
        'test/**/*.js'], ['mocha']);  
});

gulp.task('serve', ['run-server','app:watch', 'sass:watch']);