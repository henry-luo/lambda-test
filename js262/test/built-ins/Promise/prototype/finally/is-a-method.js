

/*---
author: Jordan Harband
description: finally is a method on a Promise
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
---*/

var p = Promise.resolve(3);

assert.sameValue(
  p.finally,
  Promise.prototype.finally,
  'Expected the `finally` method on a Promise to be `Promise.prototype.finally`'
);
