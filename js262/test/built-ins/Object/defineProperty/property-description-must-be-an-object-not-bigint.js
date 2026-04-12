

/*---
esid: sec-object.defineproperty
description: >
  Property description must be an object (bigint)
info: |
  Object.defineProperty ( O, P, Attributes )

  ...
  Let desc be ? ToPropertyDescriptor(Attributes).
  ...

  ToPropertyDescriptor ( Obj )

  If Type(Obj) is not Object, throw a TypeError exception.
  ...
features: [BigInt]
---*/

assert.throws(TypeError, () => {
  Object.defineProperty({}, 'a', 0n);
});
