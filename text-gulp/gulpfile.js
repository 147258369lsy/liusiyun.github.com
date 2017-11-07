var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var less = require('gulp-less');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('concat-uglify', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
           stream:true
        }))
});

gulp.task('cssnano',function () {
    gulp.src('./src/styles/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest("./dist/styles"))
});

gulp.task('lessnano',function () {
    gulp.src('./src/styles/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest("./dist/styles"))
});

gulp.task("sass",function () {
    gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest("./dist/styles"))
        .pipe(browserSync.reload({
               stream:true
        }))
});

//html的压缩
gulp.task('htmlmin', function() {
    gulp.src('./src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,  //去掉白色空格
            removeComments: true,     //压缩去掉注释
            removeAttributeQuotes: true,  //去掉引号
            removeScriptTypeAttributes: true  //去掉js type属性
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
           stream:true     //刷新
    }))
});

//自动调用gulp任务:监听不同的文件夹,调用相应的任务
gulp.task("autogulp", function () {
    gulp.watch('./src/index.html', ['htmlmin']);
    gulp.watch('./src/styles/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['concat-uglify']);
});

//浏览器同步
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('./src/index.html', ['htmlmin']);
    gulp.watch('./src/styles/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['concat-uglify']);
});

