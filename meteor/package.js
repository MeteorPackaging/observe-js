// package metadata file for Meteor.js
'use strict';

var packageName = 'polymer:observe';  // https://atmospherejs.com/Polymer/observe
var where;  // where to install: 'client' or 'server'. For both, pass nothing.

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'Observe-js (official) - observe Arrays, Objects and PathValues',
  version: packageJson.version,
  git: 'https://github.com/Polymer/observe-js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export([
    'PathObserver',
    'ArrayObserver',
    'ObjectObserver',
    'CompoundObserver',
    'ObserverTransform'
  ]);
  api.addFiles([
    'src/observe.js',
    'meteor/export.js'
  ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});