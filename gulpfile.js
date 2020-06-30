const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const ejs = require('gulp-ejs');
// const uglify = require('gulp-uglify');
const terser = require('gulp-terser');
const rigger = require("gulp-rigger");
const del = require('del');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function styles() {

    return gulp.src('src/assets/scss/style.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
}

function styles1() {

    return gulp.src('src/assets/scss/style-01.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(concat('style-01.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
}

function styles2() {

    return gulp.src('src/assets/scss/style-02.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(concat('style-02.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
}

function styles3() {

    return gulp.src('src/assets/scss/style-03.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(concat('style-03.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
}

function styles4() {

    return gulp.src('src/assets/scss/style-04.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(concat('style-04.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
}

function styles5() {

    return gulp.src('src/assets/scss/style-05.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(concat('style-05.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
}

function styles6() {

    return gulp.src('src/assets/scss/style-06.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(concat('style-06.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
}

function styles7() {

    return gulp.src('src/assets/scss/style-07.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(concat('style-07.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemap.write('./'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(browserSync.stream());
}

function css() {
    return gulp.src('src/assets/scss/past-styles/oldStyle.min.css')
        .pipe(gulp.dest('build/assets/css'))
}

function scriptsOld() {
    return gulp.src('src/assets/js/libs/old-all.js')
        .pipe(gulp.dest('build/assets/js'))
}

function scripts() {

    return gulp.src([
        'src/assets/js/pages/**/*.js',
        'src/assets/js/main.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest('build/assets/js'))
        .pipe(terser())
        .pipe(gulp.dest('build/assets/js'))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src('src/*.html')
        .pipe(plumber())
        .pipe(ejs())
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream());
}

function img() {
    return gulp.src('src/assets/img/**/*.*')
        .pipe(gulp.dest('build/assets/img'))
}

function fonts() {
    return gulp.src('src/assets/fonts/**/*.*')
        .pipe(gulp.dest('build/assets/fonts'))

}

function og() {
    return gulp.src('src/assets/og/**/*.*')
        .pipe(gulp.dest('build/assets/og'))

}

function favicons() {
    return gulp.src('src/assets/favicons/**/*.*')
        .pipe(gulp.dest('build/assets/favicons'))

}

function clean() {
    return del(['build/*'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    gulp.watch('src/assets/scss/**/*.scss', styles)
    gulp.watch('src/assets/scss/**/*.scss', styles1)
    gulp.watch('src/assets/scss/**/*.scss', styles2)
    gulp.watch('src/assets/scss/**/*.scss', styles3)
    gulp.watch('src/assets/scss/**/*.scss', styles4)
    gulp.watch('src/assets/scss/**/*.scss', styles5)
    gulp.watch('src/assets/scss/**/*.scss', styles6)
    gulp.watch('src/assets/scss/**/*.scss', styles7)
    gulp.watch('src/assets/scss/past-styles/*.css', css)
    gulp.watch('src/assets/js/**/*.js', scripts)
    gulp.watch('src/*.html', html)
    gulp.watch('src/assets/img/**/*.*', img)
    gulp.watch('src/assets/fonts/**/*.*', fonts)
    gulp.watch('src/assets/og/**/*.*', og)
    gulp.watch('src/assets/og/**/*.*', favicons)
    gulp.watch("*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('styles1', styles1);
gulp.task('styles2', styles2);
gulp.task('styles3', styles3);
gulp.task('styles4', styles4);
gulp.task('styles5', styles5);
gulp.task('styles6', styles6);
gulp.task('styles7', styles7);
gulp.task('css', css);
gulp.task('scripts', scripts);
gulp.task('scriptsOld', scriptsOld);
gulp.task('html', html);
gulp.task('img', img);
gulp.task('fonts', fonts);
gulp.task('og', og);
gulp.task('og', favicons);
gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles,styles1,styles2,styles3,styles4,styles5,styles6,styles7,css,scripts,scriptsOld,html,img,fonts,og,favicons)));
gulp.task('dev', gulp.series('build','watch'));
