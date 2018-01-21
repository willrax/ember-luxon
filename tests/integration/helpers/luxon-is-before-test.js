import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

moduleForComponent('luxon-is-before', 'helper:luxon-is-before', {
  integration: true
});

test('it returns false when the date is not before', function(assert) {
  let now = DateTime.local();
  let before = now.minus({ days: 3 });

  this.set('now', now);
  this.set('before', before);

  this.render(hbs`{{luxon-is-before now before}}`);

  assert.equal(this.$().text().trim(), "false");
});

test('it returns true when the date is before', function(assert) {
  let now = DateTime.local();
  let later = now.plus({ days: 3 });

  this.set('now', now);
  this.set('later', later);

  this.render(hbs`{{luxon-is-before now later}}`);

  assert.equal(this.$().text().trim(), "true");
});
