'use strict';

var path = require('path');
var funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-photoswipe',

  included: function(app) {
    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import('node_modules/photoswipe/dist/photoswipe.css');
      app.import('node_modules/photoswipe/dist/default-skin/default-skin.css');
      app.import('node_modules/photoswipe/dist/photoswipe.min.js');
      app.import('node_modules/photoswipe/dist/photoswipe-ui-default.min.js');
    }
  },

  treeForPublic: function() {
    var svgPath = path.join('node_modules/photoswipe/dist/default-skin');
    var publicTree = new funnel(this.treeGenerator(svgPath), {
      srcDir: '/',
      destDir: '/assets',
      exclude: ['default-skin.css']
    });
    return publicTree;
  }
};
