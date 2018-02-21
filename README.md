# ember-luxon

[![NPM version](https://img.shields.io/npm/v/ember-luxon.svg?style=for-the-badge)](https://npmjs.com/package/ember-luxon)
[![CircleCI](https://img.shields.io/circleci/project/github/willrax/ember-luxon/master.svg?style=for-the-badge)](https://circleci.com/gh/willrax/ember-luxon/tree/master)

An addon to allow importing of [Luxon](https://moment.github.io/luxon/) in your Ember Apps.

## Installation

* `ember install ember-luxon`;

Most modern browers will work fine with luxon. If you need to support legacy browsers you will need to include some polyfills.

You can provide an option in your apps `ember-cli-build.js` file and we'll add [intl.js](https://github.com/andyearnshaw/Intl.js/) to your build.

```js
'ember-luxon': {
  includeIntlPolyfill: true
}
```

See the Luxon [support matrix](https://moment.github.io/luxon/docs/manual/matrix.html) for more information and which browsers support which features and other caveats.

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

### Helpers

Ember luxon provices some helpers for use in templates.

**luxon**

Given a string and a format it will generate a luxon datetime object.

```hbs
{{luxon "2014 Aug 06" "yyyy LLL dd"}}
```

**luxon-diff**

This will determine the length of time between two days.
Precision is optional and will default to milliseconds.

```hbs
{{luxon-diff dateOne dateTwo}}                  /* 86400000
{{luxon-diff dateOne dateTwo precision="days"}} /* 1
```

**luxon-format**

Given a datetime object it will format it. If you don't provide a format string
ember-luxon will default to using local formatting.

```hbs
{{luxon-format dateOne format="yyyy LLL dd"}} /* "2014 Aug 06"
{{luxon-format dateOne}}                      /* "4/20/2017"
```

**luxon-is-after**

Will return true or false depending on whether the first dateTime is after the second.

```hbs
{{luxon-is-after earlyDate lateDate}} /* true
{{luxon-is-after lateDate earlyDate}} /* false
```

**luxon-is-before**

Will return true or false depending on whether the first dateTime is before the second.

```hbs
{{luxon-is-before earlyDate lateDate}} /* true
{{luxon-is-before lateDate earlyDate}} /* false
```

**luxon-is-before**

Will return true or false depending on whether the first dateTime is contained within a pair of dates.

```hbs
{{luxon-is-before dateTime startDate endDate}} /* true
```

**luxon-is-same**

Will return true or false depending on whether the first dateTime is the same as the other date.
You can set the precision here to verify if it is the day, millisecond, hour etc.

```hbs
{{luxon-is-same dateTime dateTime}}                        /* true
{{luxon-is-same dateTime dateTimeTwo precision="day"}}     /* true
{{luxon-is-same dateTime dateTimeThree precision="month"}} /* true
```
