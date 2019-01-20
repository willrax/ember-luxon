import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

module('helper:luxon-format', function(hooks) {
  setupRenderingTest(hooks);

  test('applies a format', async function(assert) {
    let date = DateTime.local(2017, 5, 15, 8, 30);
    this.set('date', date);
    await render(hbs`{{luxon-format date "yyyy LLL dd"}}`);
    assert.dom('*').hasText('2017 May 15');
  });

  test('defaults to locale when no format is specified', async function(assert) {
    let date = DateTime.local(2017, 5, 15, 8, 30);
    this.set('date', date);
    await render(hbs`{{luxon-format date "yyyy LLL dd"}}`);
    assert.dom('*').hasText('2017 May 15');
  });
});
