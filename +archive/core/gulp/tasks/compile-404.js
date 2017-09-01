const gulp = require('gulp')
const rename = require('gulp-rename')
const hb = require('gulp-hb')
const sass = require('node-sass')
const {getVersion, buildName, buildConfig, destinationFolder, sources} = require('../utils/utils')

gulp.task('compile-404', () => {
  var config = buildConfig()
  const result = sass.renderSync({
    file: config.theme.src + '/root.scss'
  })
  const hbStream = hb({
    data: Object.assign({}, config, { build: buildName(), version: getVersion(), css: result.css.toString('utf8') }),
    helpers: {
      compileRouting: (options) => {
        return JSON.stringify(Object.assign({}, options.data.global.routing, options.data.global.httpCodes))
      },
      compileShellComponents: (options) => {
        return JSON.stringify(Object.assign({}, options.data.global.shellComponents))
      }
    }
  })
  return gulp.src(sources.forceIndex)
    .pipe(hbStream)
    .pipe(rename(function (path) {
      path.basename = '404'
      path.extname = '.html'
    }))
    .pipe(gulp.dest(destinationFolder()))
})
