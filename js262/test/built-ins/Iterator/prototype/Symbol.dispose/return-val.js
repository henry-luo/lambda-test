

/*---
esid: sec-%iteratorprototype%-@@dispose
description: Return value of @@dispose on %IteratorPrototype%
info: |
  %IteratorPrototype% [ @@dispose ] ( )

  1. Let O be the this value.
  2. Let return be ? GetMethod(O, "return").
  3. If return is not undefined, then
    a. Perform ? Call(return, O, « »).
  4. Return undefined.

features: [explicit-resource-management]
---*/
const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.sameValue(IteratorPrototype[Symbol.dispose](), undefined);
