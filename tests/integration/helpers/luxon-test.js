import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('luxon', 'helper:luxon', {
  integration: true
});

test('it renders', function(assert) {
  this.set('dateString', '01-17-1987');
  this.set('dateFormat', 'MM-dd-yyyy');

  this.render(hbs`{{luxon dateString dateFormat}}`);

  assert.equal(this.$().text().trim(), '1987-01-17T00:00:00.000+00:00');
});
