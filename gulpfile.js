var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var amdOptimize = require('amd-optimize');

var path = {
	scripts: 'static/js/*',
	destScripts: 'static/'
};

gulp.task('concat', function(){
	gulp.src(path.scripts + '.js')
		.pipe(amdOptimize('main', {
			name: 'main',
			configFile: "static/js/main.js",
			baseUrl: 'static/js/'
		}))
		.pipe(concat('result.js'))
		.pipe(uglify())
		.pipe(gulp.dest(path.destScripts))
});

gulp.task('default', ['concat']);