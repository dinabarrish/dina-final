import gulp from 'gulp';


function format() {
  return gulp
    .src([
      './src/js/*.js',
      './docs/*/*.html',
      './docs/*.html',
      './src/js/*.js',
      './src/_data/*.json'
    ])
  
}

gulp.task('format', format);

export default format;
