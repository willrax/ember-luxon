import Helper from '@ember/component/helper';
import { DateTime } from 'luxon';

export default Helper.extend({
  compute([dateString, dateFormat]) {
    this._super(...arguments);

    return DateTime.fromFormat(dateString, dateFormat);
  }
});
