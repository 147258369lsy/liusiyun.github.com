var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task('es6', function (){
    return gulp.src('./src/js/test.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist/js'))
});