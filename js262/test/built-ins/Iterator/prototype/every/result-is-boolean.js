

/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every returns a boolean
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();
assert.sameValue(typeof iter.every(() => {}), 'boolean');
