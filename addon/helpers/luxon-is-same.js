import Helper from '@ember/component/helper';

export default class LuxonIsSame extends Helper {
  compute([dateOne, dateTwo], { precision = 'day' }) {
    return dateOne.hasSame(dateTwo, precision)
  }
}
