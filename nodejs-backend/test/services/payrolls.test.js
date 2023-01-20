const assert = require('assert');
const app = require('../../src/app');

describe('\'payrolls\' service', () => {
  it('registered the service', () => {
    const service = app.service('payrolls');

    assert.ok(service, 'Registered the service (payrolls)');
  });
});
