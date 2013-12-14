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
//compressed for styles, minification
/*    watch: {
      files: ['css/*.scss'],
      tasks: ['sass']
    }
  */
  //cd e:/xampp/htdocs/new_art




/*
 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     watch: {
      files: ['css/*.scss'],
      tasks: ['sass'],
      options: {
        spawn: false,
      },
    },
  sass: {                             
    dist: {                           
      options: {                       
        style: 'expanded'
      },
      files: {                         
        'css/test/main.css': 'css/test.scss'
      }
    }
  }
});*/

