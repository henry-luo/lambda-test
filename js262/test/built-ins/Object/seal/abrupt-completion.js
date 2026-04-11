

/*---
esid: sec-object.seal
description: >
  O.[[PreventExtensions]]() returns abrupt completion.
info: |
  Object.seal ( O )

  ...
  2. Let status be ? SetIntegrityLevel(O, sealed).

  SetIntegrityLevel ( O, level )

  ...
  3. Let status be ? O.[[PreventExtensions]]().
features: [Proxy]
---*/

var p = new Proxy({}, {
  preventExtensions: function() {
    throw new Test262Error();
  },
});

assert.throws(Test262Error, function() {
  Object.seal(p);
});
