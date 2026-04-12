

/*---
esid: sec-object.preventextensions
description: >
  Object.preventExtensions throws if O.[[PreventExtensions]]() returns false.
info: |
  Object.preventExtensions ( O )
  ...
  2. Let status be ? O.[[PreventExtensions]]().
  3. If status is false, throw a TypeError exception.
---*/

const p = new Proxy({}, {
  preventExtensions() {
    return false;
  },
});

assert.throws(TypeError, () => {
  Object.preventExtensions(p);
});
