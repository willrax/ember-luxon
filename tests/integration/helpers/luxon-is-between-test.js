import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

moduleForComponent('luxon-is-between', 'helper:luxon-is-between', {
  integration: true
});

test('returns true if the date is within the interval', function(assert) {
  let date = DateTime.local();
  let one = date.minus({ days: 5 });
  let two = date.plus({ days: 5 });

  this.set('date', date);
  this.set('one', one);
  this.set('two', two);

  this.render(hbs`{{luxon-is-between date one two}}`);

  assert.equal(this.$().text().trim(), 'true');
});

test('returns false if the date is not within the interval', function(assert) {
  let date = DateTime.local();
  let one = date.plus({ days: 2 });
  let two = date.plus({ days: 5 });

  this.set('date', date);
  this.set('one', one);
  this.set('two', two);

  this.render(hbs`{{luxon-is-between date one two}}`);

  assert.equal(this.$().text().trim(), 'false');
});
