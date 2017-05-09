const gulp = require('gulp')
const webserver = require('gulp-webserver')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const del = require('del')

//development(开发模式)
gulp.task('dev_browserify',() => {
  browserify('./src/index.js',{debug:true})
    .transform(babelify)
    .bundle()
    .on('error',(err) => {
      console.log(err.message)
    })
    .pipe(source('app.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('./static/assets/js'))
})

//production(生产模式)
gulp.task('pro_browserify',() => {
  browserify('./src/index.js',{debug:true})
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets/js'))
})

//copy assets
gulp.task('copy_assets',() => {
  gulp.src('./static/**/**/*')
    .pipe(gulp.dest('./build'))
})

//watch js
gulp.task('watchjs',() => {
  gulp.watch('./src/**/**/*',['dev_browserify'])
})

//webserver
gulp.task('webserver',() => {
  gulp.src('./static')
    .pipe(webserver({
      host:'0.0.0.0',
  	  port:8888,
      fallback:'index.html',
    })
  )
})

//删除dev cleanjs
// gulp.task("dev_cleanjs",(cb) =>{
//   del(['./static/assets/js/*'],cb);
// })

if(process.env.NODE_ENV === 'development'){
  gulp.task('default',['dev_browserify','watchjs','webserver'])
}
else if(process.env.NODE_ENV === 'production'){
  gulp.task('default',['copy_assets','pro_browserify'])
}
