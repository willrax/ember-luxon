import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

module('helper:luxon-is-same', function(hooks) {
  setupRenderingTest(hooks);

  test('it has a default', async function(assert) {
    let date = DateTime.local();
    this.set('dateOne', date);
    this.set('dateTwo', date);

    await render(hbs`{{luxon-is-same dateOne dateTwo}}`);

    assert.dom('*').hasText('true');
  });

  test('it allows for a precision', async function(assert) {
    let date = DateTime.local();
    this.set('dateOne', date);
    this.set('dateTwo', date.plus({ year: 1 }));

    await render(hbs`{{luxon-is-same dateOne dateTwo precision="year"}}`);

    assert.dom('*').hasText('false');
  });

  test('it allows for a precision', async function(assert) {
    let date = DateTime.local();
    this.set('dateOne', date);
    this.set('dateTwo', date.plus({ year: 1 }));

    await render(hbs`{{luxon-is-same dateOne dateTwo precision="year"}}`);

    assert.dom('*').hasText('false');
  });
});
