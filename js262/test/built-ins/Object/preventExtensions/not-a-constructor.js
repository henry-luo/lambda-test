

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Object.preventExtensions does not implement [[Construct]], is not new-able
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
features: [Reflect.construct, arrow-function]
---*/

assert.sameValue(
  isConstructor(Object.preventExtensions),
  false,
  'isConstructor(Object.preventExtensions) must return false'
);

assert.throws(TypeError, () => {
  new Object.preventExtensions({});
});

