

/*---
esid: sec-object.preventextensions
description: >
  O.[[PreventExtensions]]() returns abrupt completion.
info: |
  Object.preventExtensions ( O )

  ...
  2. Let status be ? O.[[PreventExtensions]]().
features: [Proxy]
---*/

var p = new Proxy({}, {
  preventExtensions: function() {
    throw new Test262Error();
  },
});

assert.throws(Test262Error, function() {
  Object.preventExtensions(p);
});
