import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

moduleForComponent('luxon-is-same', 'helper:luxon-is-same', {
  integration: true
});

test('it has a default', function(assert) {
  let date = DateTime.local();
  this.set('dateOne', date);
  this.set('dateTwo', date);

  this.render(hbs`{{luxon-is-same dateOne dateTwo}}`);

  assert.equal(this.$().text().trim(), 'true');
});

test('it allows for a precision', function(assert) {
  let date = DateTime.local();
  this.set('dateOne', date);
  this.set('dateTwo', date.plus({ year: 1 }));

  this.render(hbs`{{luxon-is-same dateOne dateTwo precision="year"}}`);

  assert.equal(this.$().text().trim(), 'false');
});

test('it allows for a precision', function(assert) {
  let date = DateTime.local();
  this.set('dateOne', date);
  this.set('dateTwo', date.plus({ year: 1 }));

  this.render(hbs`{{luxon-is-same dateOne dateTwo precision="year"}}`);

  assert.equal(this.$().text().trim(), 'false');
});
