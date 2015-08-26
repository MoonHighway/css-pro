module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'style/style.css' : 'style.scss'
                }
            }
        },
        cssmin: {
          target: {
              files: [{
                  expand: true,
                  cwd: 'style/',
                  src: ['*.css', '!.min.css'],
                  dest: 'release/',
                  ext: '.min.css'
              }]
          }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass', 'cssmin', 'watch' ]);
}