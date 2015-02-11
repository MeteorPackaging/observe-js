/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      options: {
        configFile: 'conf/karma.conf.js',
        keepalive: true
      },
      buildbot: {
        reporters: ['crbot'],
        logLevel: 'OFF'
      },
      'observe-js': {
      }
    },
    exec: {
      'meteor-init': {
        command: [
          // Make sure Meteor is installed, per https://meteor.com/install.
          // The curl'ed script is safe; takes 2 minutes to read source & check.
          'type meteor >/dev/null 2>&1 || { curl https://install.meteor.com/ | sh; }',
          // Meteor expects package.js to be in the root directory
          // of the checkout, so copy it there temporarily
          'cp meteor/package.js .'
        ].join(';')
      },
      'meteor-cleanup': {
        // remove build files and package.js
        command: 'rm -rf .build.* versions.json package.js'
      },
      'meteor-test': {
        command: 'node_modules/.bin/spacejam --mongo-url mongodb:// test-packages ./'
      },
      'meteor-publish': {
        command: 'meteor publish'
      }
    }
  });

  grunt.loadTasks('../tools/tasks');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', 'test');
  grunt.registerTask('test', ['override-chrome-launcher', 'karma:observe-js']);
  grunt.registerTask('test-buildbot', ['override-chrome-launcher', 'karma:buildbot']);

  grunt.registerTask('meteor-test', ['exec:meteor-init', 'exec:meteor-test', 'exec:meteor-cleanup']);
  grunt.registerTask('meteor-publish', ['exec:meteor-init', 'exec:meteor-publish', 'exec:meteor-cleanup']);
  grunt.registerTask('meteor', ['exec:meteor-init', 'exec:meteor-test', 'exec:meteor-publish', 'exec:meteor-cleanup']);

};
