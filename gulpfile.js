var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass')(require('sass'));




gulp.task("Css",function () {
    return gulp.src('Css/*.css')
    .pipe(gulp.dest('dist/Css'))
    
})

gulp.task("fonts",function () {
    return gulp.src('Css/Fonts/*.*')
    .pipe(gulp.dest('dist/Css/Fonts'))
    
})

gulp.task("index",function () {
    return gulp.src('index.html')
    .pipe(gulp.dest('dist'))
    
})

gulp.task('imagemin', function() {
    var imgSrc = 'Images/*.+(png|jpg|gif)',
    imgDst = 'dist/Images';
    
    gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
 });
 
 gulp.task('default',['imagemin'],function(){
 });

 gulp.task("sass",function () {
    return gulp.src('Css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/Css'))
});