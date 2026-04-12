

/*---
esid: sec-set.prototype.difference
description: Set.prototype.difference does not implement [[Construct]], is not new-able
includes: [isConstructor.js]
features: [Reflect.construct, set-methods]
---*/

assert.sameValue(
  isConstructor(Set.prototype.difference),
  false,
  "isConstructor(Set.prototype.difference) must return false"
);

assert.throws(
  TypeError,
  () => {
    new Set.prototype.difference();
  });
