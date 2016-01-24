var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('run-server', function () {
    // Start the server at the beginning of the task 
    server.run(['server.js']);

    gulp.watch(['app.js', 
        'server.js', 
        'routes/**/*.js', 
        'models/**/*.js'
       ], [server.run]);
});

gulp.task('watch-app', function(){
  gulp.watch(['app/index.html'], server.notify);
  gulp.watch(['app/**/*.html'], server.notify);
  gulp.watch(['app/**/*.js'], server.notify);
});

gulp.task('serve', ['run-server','watch-app']);