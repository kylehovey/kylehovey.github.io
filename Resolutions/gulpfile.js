// Dependencies
const gulp = require("gulp");
const sass = require("gulp-sass");
const eslint = require("gulp-eslint");
const webpack = require("webpack-stream");
const changed = require("gulp-changed");

// Webpack plugins
const Uglify = require("uglifyjs-webpack-plugin");

// Configuration
const compileTasks = require("./config/gulp.json").tasks;

// Assign handlers
// (function names are the same name as the handler keys)
const handlers = {
  compileJS,
  compileCSS,
  lintClient
};

/**
 * Create the JS compile chain for a source and destination
 * @param {String[]} source Source of files (supports globbing)
 * @param {String} destination Destination of files (supports globbing)
 * @param {Object} opts Options for compilation
 * @param {Boolean} opts.production True if in production (Babel/Minify)
 * @return {Function}
 */
function compileJS(source, destination, opts) {
  // Production compilation options
  const productionOpts = {
    plugins : [ new Uglify({ parallel : true }) ],
    module : {
      rules : [
        {
          test : /\.js$/,
          exclude : /node_modules/,
          use : { loader : "babel-loader", options : { presets : [ "env" ] } }
        }
      ]
    }
  };

  // Aggregate full options for compilation
  const fullOps = Object.assign({
    watch : false,
    output : { filename : "bundle.js" },
    devtool : "source-map",
  }, opts.production ? productionOpts : { });

  // Return the pipeline
  return () => gulp.src(source)
    .pipe(webpack(fullOps))
    .pipe(gulp.dest(destination));
}

/**
 * Create the SASS compile chain for a source and destination
 * @param {String} source Source of files (supports globbing)
 * @param {String} destination Destination of files (supports globbing)
 * @return {Function}
 */
function compileCSS(source, destination) {
  return () => gulp.src(source)
    .pipe(changed(destination))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(destination));
}

/**
 * Run ESLint (Client)
 * @param {String} source Source of files (supports globbing)
 * @param {String} destination Destination of files (supports globbing)
 * @return {Function}
 */
function lintClient(source) {
  return () => gulp.src(source)
    .pipe(eslint({ config : "./src/.eslintrc.client.json" }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Find enabled tasks
const enabledTasks = Object
  .entries(compileTasks)
  .map(([ type, tasks ]) => tasks
    .filter(task => task.enabled)
    .map(task =>
      Object.assign(
        {
          handler : handlers[type](task.src, task.dest, task.opts),
          type
        },
        task
      )
    )
  )
  .reduce((acc, arr) => acc.concat(arr), []);

/* ===== GULP TASKS BELOW THIS LINE ===== */

// Compile all tasks into gulp
enabledTasks.forEach(task => gulp.task(task.name, task.handler));

// Make the default task run our compiled jobs
gulp.task(
  "default",
  enabledTasks.map(task => task.name)
);

// Create a task for each type so that they may be run individually
Object
  .keys(compileTasks)
  .forEach(type => {
    gulp.task(
      type,
      enabledTasks
        .filter(task =>task.type === type)
        .map(task => task.name)
    );
  });
