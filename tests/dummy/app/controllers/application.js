import Controller from '@ember/controller';
import { DateTime } from 'luxon';
import { computed } from '@ember/object';

export default Controller.extend({

  timeNow: computed(function() {
    let date = DateTime.local();
    return date.plus({hours: 3, minutes: 2});
  })
});
