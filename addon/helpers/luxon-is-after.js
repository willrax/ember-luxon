import Helper from '@ember/component/helper';

export default Helper.extend({
  compute([startDate, endDate]) {
    return startDate > endDate;
  }
});
