

/*---
author: Jordan Harband
description: >
  Promise.prototype.finally called with a non-object-coercible `this` value
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
---*/

assert.sameValue(typeof Promise.prototype.finally, 'function');

assert.throws(TypeError, function() {
  Promise.prototype.finally.call(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  Promise.prototype.finally.call(null);
}, 'null');
