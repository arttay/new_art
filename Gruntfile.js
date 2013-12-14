module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded'
        },
        files: {
          'css/test/global.css': 'css/test.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
   grunt.registerTask('default', [ 'sass']);


};
