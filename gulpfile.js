var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('./scripts/tsconfig.json');

gulp.task('scipts', () => {
    var tsResult = gulp.src('./scripts/**/*.ts')
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('./wwwroot/scripts'));
});

gulp.task('default', ['scripts']);
