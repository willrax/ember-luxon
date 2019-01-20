import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

module('helper:luxon-is-between', function(hooks) {
  setupRenderingTest(hooks);

  test('returns true if the date is within the interval', async function(assert) {
    let date = DateTime.local();
    let one = date.minus({ days: 5 });
    let two = date.plus({ days: 5 });

    this.set('date', date);
    this.set('one', one);
    this.set('two', two);

    await render(hbs`{{luxon-is-between date one two}}`);

    assert.dom('*').hasText('true');
  });

  test('returns false if the date is not within the interval', async function(assert) {
    let date = DateTime.local();
    let one = date.plus({ days: 2 });
    let two = date.plus({ days: 5 });

    this.set('date', date);
    this.set('one', one);
    this.set('two', two);

    await render(hbs`{{luxon-is-between date one two}}`);

    assert.dom('*').hasText('false');
  });
});
