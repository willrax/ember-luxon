import Helper from '@ember/component/helper';

export default class LuxonFormat extends Helper {
  compute([dateOne, format = false]) {
    if (format) {
      return dateOne.toFormat(format);
    } else {
      return dateOne.toLocaleString();
    }
  }
}
