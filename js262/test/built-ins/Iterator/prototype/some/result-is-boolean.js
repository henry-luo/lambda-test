

/*---
esid: sec-iteratorprototype.some
description: >
  Iterator.prototype.some returns a boolean
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();
assert.sameValue(typeof iter.some(() => {}), 'boolean');
