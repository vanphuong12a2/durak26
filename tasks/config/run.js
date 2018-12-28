/**
 * `tasks/config/frontendBuild`
 *
 * ---------------------------------------------------------------
 *
 * Custom task to run commands int the react frontend app
 *
 */
module.exports = function (grunt) {

  grunt.config.set('run', {
    options: {
      cwd: './views'
    },
    buildFrontend: {
      cmd: 'yarn',
      args: [
        'build'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-run');
};
