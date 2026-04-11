

/*---
esid: sec-error.iserror
description: >
  Returns false on non-Error objects pretending to be an Error
features: [Error.isError]
---*/

var fakeError = {
  __proto__: Error.prototype,
  constructor: Error,
  message: '',
  stack: new Error().stack
};

if (typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol') {
  fakeError[Symbol.toStringTag] = 'Error';
}

assert.sameValue(Error.isError(fakeError), false);
