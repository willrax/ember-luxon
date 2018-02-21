import moduleForAcceptance from '../helpers/module-for-acceptance';
import { test } from 'qunit';

moduleForAcceptance('Acceptance | Intl Polyfill');

// This is enabled in the dummy environment file already.
test('the polyfill is included when the option is provided', function(assert) {
  assert.expect(1);
  assert.ok(window.IntlPolyfill, 'intl polyfill was included')
});
