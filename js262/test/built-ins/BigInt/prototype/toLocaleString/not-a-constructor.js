

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  BigInt.prototype.toLocaleString does not implement [[Construct]], is not new-able
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
features: [Reflect.construct, BigInt, arrow-function]
---*/
assert.sameValue(
  isConstructor(BigInt.prototype.toLocaleString),
  false,
  'isConstructor(BigInt.prototype.toLocaleString) must return false'
);

assert.throws(TypeError, () => {
  let n = 1n;
  new n.toLocaleString();
});
