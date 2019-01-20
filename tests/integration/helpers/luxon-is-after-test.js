import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

module('helper:luxon-is-after', function(hooks) {
  setupRenderingTest(hooks);

  test('it returns true when the date is after', async function(assert) {
    let now = DateTime.local();
    let after = now.plus({ days: 3 });

    this.set('now', now);
    this.set('after', after);

    await render(hbs`{{luxon-is-before now after}}`);

    assert.dom('*').hasText('true');
  });

  test('it returns false when the date is before', async function(assert) {
    let now = DateTime.local();
    let before = now.minus({ days: 3 });

    this.set('now', now);
    this.set('before', before);

    await render(hbs`{{luxon-is-before now before}}`);

    assert.dom('*').hasText('false');
  });
});
