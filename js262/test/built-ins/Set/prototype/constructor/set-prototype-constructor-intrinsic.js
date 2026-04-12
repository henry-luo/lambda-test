

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
    Set.prototype.constructor

    The initial value of Set.prototype.constructor is the intrinsic object %Set%.

---*/

assert.sameValue(
  Set.prototype.constructor,
  Set,
  "The value of `Set.prototype.constructor` is `Set`"
);
