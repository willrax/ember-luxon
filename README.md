# ember-luxon

[![CircleCI](https://circleci.com/gh/willrax/ember-luxon/tree/master.svg?style=svg)](https://circleci.com/gh/willrax/ember-luxon/tree/master)

An addon to allow importing of [Luxon](https://moment.github.io/luxon/) in your Ember Apps.

## Installation

* `ember install ember-luxon`;

## Usage

```js
import { DateTime, Duration, Info, Interval, Settings, Zone } from 'luxon';
import Component from '@ember/component';

export default Component.extend({
  theTime: computed(function() {
    return DateTime.local()
  })
});
```
