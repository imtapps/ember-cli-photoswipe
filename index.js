/* jshint node: true */
'use strict';

var path   = require('path');
var funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-photoswipe',

  included: function(app) {
    this.app  = app;
    var psDir = app.bowerDirectory + '/photoswipe';

    app.import(psDir + '/dist/photoswipe.css');
    app.import(psDir + '/dist/default-skin/default-skin.css');
    app.import(psDir + '/dist/photoswipe-ui-default.min.js');
    app.import(psDir + '/dist/default-skin/default-skin.svg');
    app.import('vendor/photoswipe-ember.js');
  },

  treeForPublic: function() {
    var svgPath = path.join(this.app.bowerDirectory, 'photoswipe', 'dist', 'default-skin');
    var publicTree = new funnel(this.treeGenerator(svgPath), {
      srcDir: '/',
      destDir: '/assets'
    });
    return publicTree;
  }
};
