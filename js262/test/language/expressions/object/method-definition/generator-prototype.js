

/*---
description: >
    The prototype of generator functions declared as methods is the
    Generator Prototype.
es6id: 14.4.13
features: [generators]
---*/

var obj = { *method() {} };
assert.sameValue(
  Object.getPrototypeOf(obj.method),
  Object.getPrototypeOf(function*() {})
);
