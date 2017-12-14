/* eslint-env node */
'use strict';

const emberRollup = require('ember-rollup');
const runtimeDependencies = [{
  name: 'luxon',
  namespaced: false
}];

module.exports = emberRollup(runtimeDependencies, {
  name: 'ember-luxon'
});
