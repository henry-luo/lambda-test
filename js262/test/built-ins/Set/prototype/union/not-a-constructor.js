

/*---
esid: sec-set.prototype.union
description: Set.prototype.union does not implement [[Construct]], is not new-able
includes: [isConstructor.js]
features: [Reflect.construct, set-methods]
---*/

assert.sameValue(
  isConstructor(Set.prototype.union),
  false,
  "isConstructor(Set.prototype.union) must return false"
);

assert.throws(
  TypeError,
  () => {
    new Set.prototype.union();
  });
