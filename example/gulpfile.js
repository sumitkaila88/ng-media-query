/*jslint node: true */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'application'
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {
        cwd: 'application'
    }, reload);
});
