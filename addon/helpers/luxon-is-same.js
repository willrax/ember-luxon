import Helper from '@ember/component/helper';

export default Helper.extend({
  compute([dateOne, dateTwo], { precision = 'day' }) {
    return dateOne.hasSame(dateTwo, precision)
  }
})
