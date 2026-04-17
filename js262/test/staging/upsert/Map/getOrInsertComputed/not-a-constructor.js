

/*---
esid: proposal-upsert
description: |
  Map.prototype.getOrInsertComputed does not implement [[Construct]], is not new-able
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.

  sec-evaluatenew

  ...
  7. If IsConstructor(constructor) is false, throw a TypeError exception.
  ...
includes: [isConstructor.js]
features: [Map, Reflect.construct, arrow-function, upsert]
flags: [noStrict]
---*/
assert.sameValue(isConstructor(Map.prototype.getOrInsertComputed), false, 'isConstructor(Map.prototype.getOrInsertComputed) must return false');

assert.throws(TypeError, () => {
  let m = new Map(); new m.getOrInsertComputed();
});

