

/*---
author: Jordan Harband
description: Promise.prototype.finally is a function
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
---*/

assert.sameValue(
  Promise.prototype.finally instanceof Function,
  true,
  'Expected Promise.prototype.finally to be instanceof Function'
);

assert.sameValue(
  typeof Promise.prototype.finally,
  'function',
  'Expected Promise.prototype.finally to be a function'
);
