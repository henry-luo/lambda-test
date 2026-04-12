

/*---
esid: sec-set.prototype.intersection
description: Set.prototype.intersection does not implement [[Construct]], is not new-able
includes: [isConstructor.js]
features: [Reflect.construct, set-methods]
---*/

assert.sameValue(
  isConstructor(Set.prototype.intersection),
  false,
  "isConstructor(Set.prototype.intersection) must return false"
);

assert.throws(
  TypeError,
  () => {
    new Set.prototype.intersection();
  });
