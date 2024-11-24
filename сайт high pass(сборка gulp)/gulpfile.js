const { src, dest, series, watch } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()
const gulpif = require('gulp-if')

let prod = false

const isProd = (done) => {
    prod = true
    done()
}

const clean = () => {
    return del(['dist'])
}

const resources = () => {
    return src('src/resources/**')
    .pipe(dest('dist'))
    .pipe(dest('build'))
}

const font = () => {
    return src('./src/font/**', {encoding: false})
        .pipe(dest('dist/font'))
        .pipe(dest('build/font'))
}  

const styles = () => {
    return src('src/styles/**/*.css')
        .pipe(gulpif(!prod,sourcemaps.init()))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulpif(prod, cleanCSS({
            level: 2
        })))       
        .pipe(gulpif(!prod,sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(dest('build'))
        .pipe(browserSync.stream())
}

const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(gulpif(!prod,htmlMin({
            collapseWhitespace: true
        })))
        .pipe(dest('dist'))
        .pipe(dest('build'))
        .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/img/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/images'))
        .pipe(dest('build/images'))
}

const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
        .pipe(gulpif(!prod,sourcemaps.init()))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .pipe(gulpif(!prod,uglify({
            toplevel: true
        })).on('error', notify.onError()))
        .pipe(gulpif(!prod,sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(dest('build'))
        .pipe(browserSync.stream())
}


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    })
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.jpeg',
        'src/img/**/*.png',
        'src/img/*.svg',
    ], { encoding: false })
        .pipe(image())
        .pipe(dest('dist/img'))
        .pipe(dest('build/img'))
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', styles)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)
watch('src/font/**/*', font)

exports. font = font
exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.dev = series(clean, resources, htmlMinify, scripts, font, styles, images, svgSprites, watchFiles)
exports.build = series(isProd, clean, resources, htmlMinify, scripts, font, styles, images, svgSprites)