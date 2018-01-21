import Helper from '@ember/component/helper';
import { Interval } from 'luxon';

export default Helper.extend({
  compute([startDate, endDate], { precision = 'milliseconds' }) {
    let interval = Interval.fromDateTimes(startDate, endDate);
    return interval.length(precision);
  }
});
