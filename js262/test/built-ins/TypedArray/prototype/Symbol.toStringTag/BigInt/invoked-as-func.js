

/*---
esid: sec-get-%typedarray%.prototype-@@tostringtag
description: If this value is not Object, return undefined.
info: |
  22.2.3.31 get %TypedArray%.prototype [ @@toStringTag ]

  1. Let O be the this value.
  2. If Type(O) is not Object, return undefined.
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, Symbol.toStringTag, TypedArray]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, Symbol.toStringTag
).get;

assert.sameValue(getter(), undefined);
