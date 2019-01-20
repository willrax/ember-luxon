import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

module('helper:luxon-diff', function(hooks) {
  setupRenderingTest(hooks);

  test('it provides a diff without a precision', async function(assert) {
    let startDate = DateTime.local();
    let endDate = startDate.plus({ hours: 3 });

    this.set('startDate', startDate);
    this.set('endDate', endDate);

    await render(hbs`{{luxon-diff startDate endDate}}`);

    assert.dom('*').hasText('10800000');
  });

  test('it provides a diff with a precision of days', async function(assert) {
    let startDate = DateTime.local();
    let endDate = startDate.plus({ days: 3 });

    this.set('startDate', startDate);
    this.set('endDate', endDate);

    await render(hbs`{{luxon-diff startDate endDate precision="days"}}`);

    assert.dom('*').hasText('3');
  });
});
