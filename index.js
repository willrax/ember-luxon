'use strict';

const Rollup = require('broccoli-rollup');
const transformer = require('ember-cli-es6-transform');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const resolve = require('resolve');

module.exports = {
  name: 'ember-luxon',

  included(app) {
    this._super.included.apply(app, arguments);

    app.import('vendor/luxon.js');
  },

  treeForVendor(tree) {
    const srcPath = path.join(resolve.sync('luxon'), '..', '..', '..', 'src');

    let allTrees = [];
    let rollupTree = new Rollup(srcPath, {
      rollup: {
        input: 'luxon.js',
        output: {
          file: 'luxon.js',
          format: 'es'
        }
      }
    });

    const babel = this.parent.findAddonByName('ember-cli-babel');
    const babelOptions = babel.buildBabelOptions();
    const es6Tree = transformer.es6Transform(rollupTree, babelOptions);

    allTrees.push(es6Tree);

    if (tree) {
      allTrees.push(tree);
    }

    return mergeTrees(allTrees);
  }
};
