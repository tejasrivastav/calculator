module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    typescript: {
      dev: {
        src:['src/**/*.ts'],
        dest: 'public/js/index.js',
        options: {
          target: 'es5',
          sourcemap: true
        }
      }
    },
    bower_concat: {
        all: {
            dest: 'public/js/resources.js',
            cssDest: 'public/css/resources.css',
            bowerOptions: false
        }
    }
  });

  // Default task(s).
  grunt.registerTask('default', [
    'bower_concat:all',
    'typescript:dev'
  ]);
};
