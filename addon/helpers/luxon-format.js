import Helper from '@ember/component/helper';

export default Helper.extend({
  compute([dateOne, format = false]) {
    if (format) {
      return dateOne.toFormat(format);
    } else {
      return dateOne.toLocaleString();
    }
  }
})
