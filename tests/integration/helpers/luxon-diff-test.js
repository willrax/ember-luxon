import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

moduleForComponent('luxon-diff', 'helper:luxon-diff', {
  integration: true
});

test('it provides a diff without a precision', function(assert) {
  let startDate = DateTime.local();
  let endDate = startDate.plus({ hours: 3 });

  this.set('startDate', startDate);
  this.set('endDate', endDate);

  this.render(hbs`{{luxon-diff startDate endDate}}`);

  assert.equal(this.$().text().trim(),  '10800000');
});

test('it provides a diff with a precision of days', function(assert) {
  let startDate = DateTime.local();
  let endDate = DateTime.local().plus({ days: 3 });

  this.set('startDate', startDate);
  this.set('endDate', endDate);

  this.render(hbs`{{luxon-diff startDate endDate precision="days"}}`);

  assert.equal(this.$().text().trim(), '3');
});
