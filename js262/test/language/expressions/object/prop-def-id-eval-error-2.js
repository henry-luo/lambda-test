

/*---
es6id: 12.2.5.9
description: >
    Errors thrown during IdentifierReference evaluation are forwarded to the
    runtime.
flags: [noStrict]
features: [Proxy]
---*/

var p = new Proxy({}, {
  has: function () {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  with (p) {
    ({attr});
  }
});
