# node-express-boilerplate

A Node.js boilerplate to get you off the ground and running.

## Command Line Dependencies:

* Gulp
* Node/NVM

## Included Client-Side Libraries:

* [jQuery 3.2.1](https://jquery.com/)
* [Bootstrap 3.3.7](https://getbootstrap.com/)
* [Sweet Alert 2 v6.6.5](https://limonte.github.io/sweetalert2/)
* [Lodash 4](https://lodash.com/)

## Getting Started

* Clone this repository
* `cd` into the repo directory then run `npm install`.
* Run `gulp` to execute all tasks (this will compile the JS, CSS, de-lint code, and generate documentation).
* In the project root, run `npm start` to begin the server
* Navigate to [http://localhost:3000](http://localhost:3000) on the same machine running the server to view the app

# Gulp Tasks

This project uses an extensible Gulp configuration pattern using a JSON config file (`config/gulp.json`). Each task is located under a type in the file. Each type must have an associated handler written for it in `gulpfile.js` with the same name as the type. The handler's job is to create a gulp task given the information contained in the task configuration.

Task types can be run with `gulp <type>` from the command line when in this repo. For instance, `gulp compileJS` would begin webpack and compile `src/js` code into `public/js/app/bundle.js`. Alternatively, the command `gulp` can be run by itself to run all task types that are enabled in `config/gulp.json`.

I have already written these common task types:

- `compileJS`: Run webpack and compile code from source to destination
  - Example Task Configuration:
 ```json
{
  "name" : "app-JS",
  "opts" : { "production" : false },
  "src" : "./src/js/index/main.js",
  "dest" : "./public/js/app/index",
  "enabled" : true
}
 ```
- `compileCSS`: Compile any SCSS in `src/style` into plain CSS
  - Example Task Configuration:
 ```json
{
  "name" : "app-CSS",
  "opts" : { },
  "src" : "./src/sass/**/*.scss",
  "dest" : "./public/style",
  "enabled" : true
}
 ```
- `lintClient`:
  - Example Task Configuration:
 ```json
{
  "name" : "app-ESLint",
  "opts" : { },
  "src" : "./src/**/*.js",
  "enabled" : true
}
 ```
- `lintNode`:
  - Example Task Configuration:
 ```json
{
  "name" : "node-ESLint",
  "opts" : { },
  "src" : [
    "./**/*.js",
    "!./node_modules/**",
    "!./public/**",
    "!./src/**/*.js",
    "!./docs/**"
  ],
  "enabled" : true
}
 ```
- `document`:
  - Example Task Configuration:
 ```json
{
  "name" : "document-client",
  "opts" : { },
  "src" : "src/js/",
  "dest" : "docs",
  "enabled" : true
}
 ```

 **Example Handler:**:

 ```javascript
/**
 * Run ESLint (Client)
 * @param {String} source Source of files (supports globbing)
 * @param {String} destination Destination of files (supports globbing)
 * @param {Object} opts Any options
 * @return {Function}
 */
function lintClient(source, destination, opts) {
  return () => gulp.src(source)
    .pipe(eslint({ config : "./src/.eslintrc.client.json" }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}
 ```

 After writing the handler, a reference must be made in the handlers object defined at the top of `gulpfile.json`:

 ```javascript
// Assign handlers
// (function names are the same name as the handler keys)
const handlers = {
  document,
  compileJS,
  compileCSS,
  lintClient,
  lintNode
};
 ```

# ESLint

I have set up an ESLint configuration for both Node server-side and client-side code. The configs are located in `.eslintrc.json` and in `src/.eslintrc.json` for Node and client (respectively). Change these as you see fit. ESLint is run using `gulp`.

# Documentation

The `document` gulp task is set up to generate HTML doc files for client-side code using [ESDoc](https://esdoc.org/). All documentation will be output in a `docs` directory once the task has been run. The `.gitignore` file does not track generated documentation, so it will have to be generated on a clean clone of this repo.

# Client-Side Application JS

For client-side JavaScript, edit files in the `/src/js/` directory. Typically, for each view I create an `app.js` file where I create an application object that is stored in the window context. The app class composes any components needed for each page. For instance, an index page with a search page could have an `app.results` instance of a `Results` component with relevant functionality like `app.results.search().then(app.results.renderResults)`.

The `main.js` file located in `src/js/index/` is an entry point for all application code. This file instantiates the `App` class as a global variable (the only one) and adds any additional listeners to the page that can now reference the app object. Optionally, the app can be a locally declared variable and can be passed to the listeners by closure. For development, though, it is useful to have the app object stored in the global context so that it can be accessed via the developer console.

# Compiling

By default, the `gulp` task `compileJS` is set up to use webpack to convert `main.js` into a bundle containing its dependencies, which outputs in the corresponding location in `public/js/app`. The `opts` object for this task in `config/gulp.json` will not transpile ES6/ES7 and will not minify by default. To enable these features for a production build, just set the `production` flag in the aformentioned `opts` object to true.

# Components

Components are abstract views/logic that typically deal with user interaction and building elements of the DOM. I typically build components in their own directory located in `/src/js/components/`. The component directory name should match the component JS filename. To make things easy, compiled component JS files should be loaded in the base `layout.pug` in `/views/` as every view should inherit from the layout and consequently will have those components available to those scripts.
