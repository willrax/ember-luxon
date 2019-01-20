import { module, test } from 'qunit';

import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Intl Polyfill', function(hooks) {
  setupApplicationTest(hooks);

  // This is enabled in the dummy environment file already.
  test('the polyfill is included when the option is provided', function(assert) {
    assert.expect(1);
    assert.ok(window.IntlPolyfill, 'intl polyfill was included')
  });
});
