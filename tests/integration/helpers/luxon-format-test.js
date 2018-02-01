import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

moduleForComponent('luxon-format', 'helper:luxon-format', {
  integration: true
});

test('applies a format', function(assert) {
  let date = DateTime.local(2017, 5, 15, 8, 30);
  this.set('date', date);
  this.render(hbs`{{luxon-format date "yyyy LLL dd"}}`);
  assert.equal(this.$().text().trim(), '2017 May 15');
});

test('defaults to locale when no format is specified', function(assert) {
  let date = DateTime.local(2017, 5, 15, 8, 30);
  this.set('date', date);
  this.render(hbs`{{luxon-format date "yyyy LLL dd"}}`);
  assert.equal(this.$().text().trim(), '2017 May 15');
});
