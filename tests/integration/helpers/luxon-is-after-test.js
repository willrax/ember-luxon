import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

moduleForComponent('luxon-is-after', 'helper:luxon-is-after', {
  integration: true
});

test('it returns true when the date is after', function(assert) {
  let now = DateTime.local();
  let after = now.plus({ days: 3 });

  this.set('now', now);
  this.set('after', after);

  this.render(hbs`{{luxon-is-before now after}}`);

  assert.equal(this.$().text().trim(), "true");
});

test('it returns false when the date is before', function(assert) {
  let now = DateTime.local();
  let before = now.minus({ days: 3 });

  this.set('now', now);
  this.set('before', before);

  this.render(hbs`{{luxon-is-before now before}}`);

  assert.equal(this.$().text().trim(), "false");
});
