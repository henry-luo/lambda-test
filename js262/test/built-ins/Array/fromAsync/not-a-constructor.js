

/*---
esid: sec-array.fromasync
description: Array.fromAsync is not a constructor
info: |
  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in the
  description of a particular function.
includes: [isConstructor.js]
features: [Array.fromAsync, Reflect.construct]
---*/

assert(!isConstructor(Array.fromAsync), "Array.fromAsync is not a constructor");

assert.throws(TypeError, () => new Array.fromAsync(), "Array.fromAsync throws when constructed");
