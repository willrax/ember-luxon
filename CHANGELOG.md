# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.2]
- Add CircleCI for test running
- Fix build for node 4
- Fix to check tree exists before attempting mergeTrees

## [1.2.1] - 2018-01-19
- Remove ember-rollup and use es6-transformation to handle the es6 modules from luxon.

## [1.2.0] - 2018-01-16
- Bump ember-cli-babel from 6.10.0 to 6.11.0
- Bump ember-cli from 2.17.1 to 2.18.0 
- Bump luxon from 0.2.9 to 0.3.1
- Bump ember-source from 2.17.0 to 2.18.0
- Bump ember-cli-qunit from 4.1.1 to 4.2.1

## [1.1.0] - 2017-12-14
### Depreacted
- Moved to importing luxon directly without the namespace.

## [1.0.0] - 2017-12-08
### Added
- Ability to import luxon in to an ember application.
