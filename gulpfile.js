'use strict';
var gulp = require('gulp-help')(require('gulp'));
var yaml = require('js-yaml');
var fs = require('fs');
var join = require('path').join;
var config = yaml.safeLoad(fs.readFileSync('./gulpconfig.yml', 'utf8'));
var tasks = {
  'compile': [],
  'watch': [],
  'validate': [],
  'clean': [],
  'default': []
};

require('p2-theme-core')(gulp, config, tasks);

gulp.task('test:core-css', ['css'], function(done) {
  var testFilePath = join(config.css.dest, 'core-test.css');
  fs.readFile(testFilePath, 'utf8', function(err, contents) {
    var css = contents.split('\n').filter(function(line) {
      // remove empty lines
      if (line.length === 0) return false;
      // remove lines with comments
      if (line.startsWith('/*')) return false;
      return true;
    });
    if (css.length > 0) {
      console.error('No scss file imported into "scss/_core.scss" can create CSS. See "' + testFilePath + '" for CSS rules to remove.');
      process.exit(1);
    }
    done();
  });
});

tasks.validate.push('test:core-css');

gulp.task('compile', tasks.compile);
gulp.task('clean', tasks.clean);
gulp.task('validate', tasks.validate);
gulp.task('watch', tasks.watch);
tasks.default.push('watch');
gulp.task('default', tasks.default);
