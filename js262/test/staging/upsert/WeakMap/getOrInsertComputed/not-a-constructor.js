

/*---
esid: proposal-upsert
description: |
  WeakMap.prototype.getOrInsertComputed does not implement [[Construct]], is not new-able
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
features: [Reflect.construct, WeakMap, arrow-function, upsert]
flags: [noStrict]
---*/
assert.sameValue(
  isConstructor(WeakMap.prototype.getOrInsertComputed),
  false,
  'isConstructor(WeakMap.prototype.getOrInsertComputed) must return false'
);

assert.throws(TypeError, () => {
  let wm = new WeakMap(); new wm.getOrInsertComputed({}, () => 1);
});

