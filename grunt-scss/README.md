SCSS Optimization Tasks with Grunt
=================================
Follow these steps to optimize your SCSS with Grunt.

 Installing baseline tools: SASS &amp; Grunt CLI.

`sudo gem install sass`

`npm install -g grunt-cli`

Ruby is pre-installed on a Mac. You must install Ruby if using a PC.

2. Run NPM init to create a package.json.

`npm init`

3. Create a Gruntfile.js.

`module.exports = function(grunt) {
    grunt.initConfig({});`

4. Install grunt-contrib packages: sass, watch, cssmin.

`npm install grunt-contrib-sass --save-dev`
`npm install grunt-contrib-watch --save-dev`
`npm install grunt-contrib-cssmin --save-dev`

5. Add sass conversion to initConfig.
`        sass: {
             dist: {
                 files: {
                     'style/style.css' : 'style.scss'
                 }
             }
         },`

6. Add watch.
`watch: {
             css: {
                 files: '**/*.scss',
                 tasks: ['sass']
             }
         }`
7. Add minification.
        `cssmin: {
          target: {
              files: [{
                  expand: true,
                  cwd: 'style/',
                  src: ['*.css', '!.min.css'],
                  dest: 'release/',
                  ext: '.min.css'
              }]
          }
        },`
        
8. Register Tasks.
    `grunt.loadNpmTasks('grunt-contrib-sass');`
    `grunt.loadNpmTasks('grunt-contrib-watch');`
    `grunt.loadNpmTasks('grunt-contrib-cssmin')`
    `grunt.registerTask('default', ['sass', 'watch']);`