/* eslint-env node */
'use strict';

const emberRollup = require('ember-rollup');
const runtimeDependencies = ['luxon'];

module.exports = emberRollup(runtimeDependencies, {
  name: 'ember-luxon'
});
