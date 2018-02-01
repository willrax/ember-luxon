import Helper from '@ember/component/helper';
import { Interval } from 'luxon';

export default Helper.extend({
  compute([date, comparisonA, comparisonB]) {
    let interval = Interval.fromDateTimes(comparisonA, comparisonB);
    return interval.contains(date);
  }
});
