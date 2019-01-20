import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { DateTime } from 'luxon';

module('helper:luxon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('dateString', '01-17-1987');
    this.set('dateFormat', 'MM-dd-yyyy');

    const date = DateTime.fromFormat(this.dateString, this.dateFormat);

    await render(hbs`{{luxon dateString dateFormat}}`);

    assert.dom('*').hasText(date.toISO());
  });
});
