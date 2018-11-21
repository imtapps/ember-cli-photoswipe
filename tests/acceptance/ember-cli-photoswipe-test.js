import { module, test } from 'qunit';
import { visit, click, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';


module('Acceptance: EmberCliPhotoswipe', function(hooks) {
  setupApplicationTest(hooks);

  test('default list works', async function(assert) {
    await visit('/');
    await click('button.btn');
    assert.equal(findAll('img').length, 2);
  });

  test('can change img', async function(assert) {
    await visit('/');
    await click('button.change-btn');
    assert.equal(findAll('img').length, 1);
  });
});
