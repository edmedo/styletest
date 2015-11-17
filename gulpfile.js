 /**
 * sasstest
 * (c) Admedo <ed@admedo.com>
 *
 * This file only contains the default task. See ./tasks for individual sub-tasks. To add a new
 * sub-task, create new file in ./tasks and require it here. For task configurations, see ./tasks/.taskconfig.
 *
 * Generated on 2015-11-16 using generator-vars-webapp 2.0.6
 */

// Require all gulp tasks.
require('./tasks/clean');
require('./tasks/wiredep');
require('./tasks/build');
require('./tasks/serve');

// Import packages.
var config = require('./tasks/.taskconfig');
var gulp = require('gulp');
var sequence = require('run-sequence');

/**
 * Default Gulp task. This is the task that gets executed when you run the shell command 'gulp'.
 * This task will wipe the compiled files and rebuild everything, with on-complete options such
 * as serving and watching files for changes.
 *
 * @param {Boolean} debug
 * @param {Boolean} skipCSSO
 * @param {Boolean} skipUglify
 * @param {Boolean} skipRev
 * @param {Boolean} skipHTML
 * @param {Boolean} serve
 * @param {Number}  port
 * @param {Boolean} watch
 */
gulp.task('default', function(callback) {
  var seq = ['clean', 'build'];
  if (config.env.serve) seq.push('serve');
  seq.push(callback);

  sequence.apply(null, seq);
});
