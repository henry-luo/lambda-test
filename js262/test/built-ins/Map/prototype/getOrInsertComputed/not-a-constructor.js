

/*---
esid: sec-map.prototype.getorinsertcomputed
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
---*/
assert.sameValue(isConstructor(Map.prototype.getOrInsertComputed), false, 'isConstructor(Map.prototype.getOrInsertComputed) must return false');

var m = new Map();
assert.throws(TypeError, () => {
    new m.getOrInsertComputed();
});

