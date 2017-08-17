var gulp = require('gulp'), clean = require('gulp-clean');

//Dist folder where the library is published
var folders = {
    dist: 'dist/'
}

// gulp task names
var tasks = {
    default: 'default',
    cleanOutputFolders: 'clean-dist-folders'
};

// task to clean the dist folder
gulp.task(tasks.default, function () {
    return gulp.src(folders.dist, {read: false})
        .pipe(clean());
});
