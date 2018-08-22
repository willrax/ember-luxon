'use strict';

const path = require('path');
const resolve = require('resolve');

module.exports = {
  name: 'ember-luxon',

  included(app) {
    this._super.included.apply(this, arguments);
    this.app = this._findHost();
    const intlPath = path.join(resolve.sync('intl'), '..', 'dist', 'Intl.js')
    const options = this.app.project.config(app.env)['ember-luxon'] || {};

    if (options.includeIntlPolyfill) {
      app.import(intlPath);
    }
  }
};
