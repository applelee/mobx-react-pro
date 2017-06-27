const gulp = require('gulp')
const webserver = require('gulp-webserver')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const less = require('gulp-less')
const minicss = require('gulp-clean-css')

// development(开发模式)
gulp.task('dev_browserify',() => {
  browserify('./src/index.js',{debug:true})
    .transform(babelify)
    .bundle()
    .on('error',(err) => {
      console.log('出错 ========')
      console.log(err.message)
      console.log(err.codeFrame)
      console.log(err.loc)
    })
    .pipe(source('app.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('./static/assets/js'))
    .on('end',() => {
      console.log('======== js编译完成 ========')
    })
})

// production(生产模式)
gulp.task('prd_browserify',() => {
  browserify('./src/index.js',{debug:true})
    .transform(babelify)
    .bundle()
    .on('error',(err) => {
      console.log(err.message)
      console.log(err.codeFrame)
      console.log(err.loc)
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js'))
    .on('end',() => {
      console.log('======== js打包完成 ========')
    })
})

// lesspack(开发模式编译less)
gulp.task('dev_lesspack',() => {
  gulp.src('./src/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('./static/assets/css'))
    .on('error',(err) => {
      console.log(err)
    })
    .on('end',() => {
      console.log('======== css编译完成 ========')
    })
})

// lesspack(生产模式打包less)
gulp.task('prd_lesspack',() => {
  gulp.src('./src/less/app.less')
    .pipe(less())
    .pipe(minicss())
    .pipe(gulp.dest('./dist/assets/css'))
    .on('error',(err) => {
      console.log(err)
    })
    .on('end',() => {
      console.log('======== css打包完成 ========')
    })
})

// copy assets
gulp.task('copy_assets',() => {
  gulp.src(['./static/**/**/*','!./static/assets/js/app.js','!./static/assets/css/app.css'])
    .pipe(gulp.dest('./dist'))
})

// watch js
gulp.task('watchjs',() => {
  gulp.watch(['./src/components/**/*','./src/mobx/**/*'],['dev_browserify'])
})

// watch less
gulp.task('watchless',() => {
  gulp.watch('./src/less/**/*',['dev_lesspack'])
})

// webserver
gulp.task('webserver',() => {
  gulp.src('./static')
    .pipe(webserver({
      host:'0.0.0.0',
  	  port:8888,
      fallback:'index.html',
    })
  )
})

// 删除dev cleanjs
// gulp.task("dev_cleanjs",(cb) =>{
//   del(['./static/assets/js/*'],cb);
// })

if(process.env.NODE_ENV === 'development'){
  gulp.task('default',['dev_browserify','dev_lesspack','watchless','watchjs','webserver'])
}
else if(process.env.NODE_ENV === 'production'){
  gulp.task('default',['copy_assets','prd_browserify','prd_lesspack'])
}
