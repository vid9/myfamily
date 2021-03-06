let gulp = require('gulp');
let gutil = require('gulp-util');

let useref = require('gulp-useref');
let ejs = require("gulp-ejs");
let sourcemaps = require('gulp-sourcemaps');
let lazypipe = require('lazypipe');

let minifyejs = require('gulp-minify-ejs')
let uglify = require('gulp-uglify')
let gulpIf = require('gulp-if');
let cssnano = require('gulp-cssnano');

let imagemin = require('gulp-imagemin');
let cache = require('gulp-cache');

let del = require('del');
let replace = require('gulp-replace');
let gulpRemoveHtml = require('gulp-remove-html');

let runSequence = require('run-sequence');

const babel = require('gulp-babel');



gulp.task('default',  ['js', 'css', 'uglify'],() => {
    gulp.watch([
    './node_modules/getmdl-select/src/js/getmdl-select.js',
    './node_modules/air-datepicker/dist/js/datepicker.js',
    './public/scripts/es6/jquery.simplePagination.js',
    './public/scripts/es6/monthly.js',
    './public/scriptses6//dialog-polyfill.js',
    './public/scripts/es6/querydb.js',
    './public/scripts/es6/dialog.js',
    './public/scripts/es6/prijava.js',
    './public/scripts/es6/firebaseConfig.js',
    './node_modules/chart.js/src/chart.js',
    './node_modules/intro.js/intro.js',
    './node_modules/air-datepicker/dist/css/datepicker.css',
    './public/scripts/es6/hotjar.js'], ['uglify', 'js', 'css']);
});

gulp.task('useref', function(){
    return gulp.src('**/*.ejs')
    .pipe(replace(/--><!--/g, '-->'))
    .pipe(gulpRemoveHtml())
    //.pipe(replace(/\/uploads\//g, 'public/uploads/'))
    .pipe(replace(/\/scripts\/prijava.js/g, '/public/js/prijava.js'))           
    .pipe(useref({}, lazypipe().pipe(sourcemaps.init)))
        .pipe(sourcemaps.mapSources(function(sourcePath, file) {
            return '' + sourcePath;
        }))
        .pipe(sourcemaps.write(''))
    .pipe(gulpIf('*.js', uglify().on('error', function(error) {
        // we have an error
        console.log(error);
        })))
    .pipe(gulpIf('public/**/*.css', cssnano()))
    //.pipe(replace(/public\/css\//g, 'css/'))
    //.pipe(replace(/public\/js\//g, 'js/')) 
    /*
    .pipe(replace(/<%= uporabniki\[j\]\.slika %>/g, 'public/<%= uporabniki[j].slika %>'))  
    .pipe(replace(/<%= uporabniki\[i\]\.slika %>/g, 'public<%= uporabniki[i].slika %>'))
    .pipe(replace(/<%= slika\[naloge\[i\]\.vezani_uporabniki\[j\]\]\[0\]/g, 'public/<%= slika[naloge[i].vezani_uporabniki[j]][0]')) 
    .pipe(replace(/<%= slika\[naloge\[i\]\.avtor\]\[0\]/g, 'public/<%= slika[naloge[i].avtor][0]'))    
    .pipe(replace(/<%= opomniki\[i\]\.vezani_uporabniki\[j\]\.slika/g, 'public/<%= opomniki[i].vezani_uporabniki[j].slika'))
    .pipe(replace(/<%= opomniki\[i\]\.vezani_uporabniki\[j\]\.slika/g, 'public/<%= opomniki[i].vezani_uporabniki[j].slika'))
    .pipe(replace(/<%= opomniki\[i]\.vezani_uporabniki\[j]\[0] %>/g, 'public<%= opomniki[i].vezani_uporabniki[j][0] %>'))    
    .pipe(replace(/<%= opomniki\[i]\.avtor\[0] %>/g, 'public<%= opomniki[i].avtor[0] %>')) */
    //.pipe(replace(/\/uploads\/<%= i %>.png/g, 'public/uploads/<%= i %>.png'))
    .pipe(replace(/\/images\//g, 'public/images/'))
    .pipe(gulp.dest('dist/app'))
});

gulp.task('sw', function(){
    return gulp.src('public/sw.js')
    .pipe(gulp.dest('dist/app'))
});

gulp.task('login', function(){
    return gulp.src('public/scripts/prijava.js')
    .pipe(gulp.dest('dist/app/public/js'))
});

gulp.task('images', function(){
    return gulp.src('public/**/*.+(png|jpg|jpeg|gif|svg|ico)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/app/public/'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
  })

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['useref', 'images', 'login', 'sw', 'models', 'routes', 'controllers', 'move-1', 'move-2'],    
        callback
    )
})

gulp.task('models', function (callback) {
    return gulp.src('models/*.js')
    .pipe(gulp.dest('dist/models'))
})

gulp.task('routes', function (callback) {
    return gulp.src('routes/*.js')
    .pipe(gulp.dest('dist/routes'))
})

gulp.task('controllers', function (callback) {
    return gulp.src('controllers/*.js')
    .pipe(gulp.dest('dist/controllers'))
})

gulp.task('move-1', function (callback) {
    return gulp.src(['prod.js', 'package.json', 'package-lock.json', 'manifest.json', 'favicon.ico', 'config.js'])
    .pipe(replace(/node app\.js/g, 'node prod.js')) 
    .pipe(gulp.dest('dist/'))
})

gulp.task('move-2', function (callback) {
    return gulp.src(['bin/clearDayXp.js', 'bin/sendNotifications.js'])

    .pipe(gulp.dest('dist/bin'))
})

gulp.task('uglify', () => {
    return gulp.src(['./public/scripts/es6/jquery.simplePagination.js',
    './public/scripts/es6/monthly.js',
    './public/scripts/es6/dialog-polyfill.js',
    './public/scripts/es6/querydb.js',
    './public/scripts/es6/firebaseConfig.js',
    './public/scripts/es6/prijava.js',
    './public/scripts/es6/hotjar.js',
    './public/scripts/datepicker.js',
    './public/scripts/es6/dialog.js'
])
        .pipe(babel({
            presets: ['env'],
            plugins: ["transform-member-expression-literals", 
            "transform-merge-sibling-variables", 
            "transform-minify-booleans", 
            "transform-property-literals"]
        }))
        .pipe(gulpIf('*.js', uglify().on('error', function(error) {
            // we have an error
            console.log(error);
          })))
        .pipe(gulp.dest('./public/scripts'));
});


gulp.task('js', () => {    
    return gulp.src(['./node_modules/getmdl-select/getmdl-select.min.js',    
    './node_modules/air-datepicker/dist/js/datepicker.js',
    './node_modules/chart.js/dist/Chart.min.js',
    './node_modules/intro.js/intro.js'])
    /*.pipe(babel({
            presets: ['env'],
            plugins: ["transform-member-expression-literals", 
            "transform-merge-sibling-variables", 
            "transform-minify-booleans", 
            "transform-property-literals"]
        }))*/
        .pipe(gulp.dest('./public/scripts'));
});

gulp.task('css', () => {
    return gulp.src([
        './node_modules/air-datepicker/dist/css/datepicker.css'
    ])
    .pipe(gulp.dest('./public/stylesheets'))
});

function errorHandler (error) {
    console.log(error.toString());
    this.emit('end');
}
