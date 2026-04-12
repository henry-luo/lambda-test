

/*---
es6id: 12.2.5.9
description: >
    Errors thrown during IdentifierReference evaluation are forwarded to the
    runtime.
flags: [noStrict]
features: [Symbol, Symbol.unscopables]
---*/

var obj = {
  attr: null,
  get [Symbol.unscopables]() { throw new Test262Error(); }
};

assert.throws(Test262Error, function() {
  with (obj) {
    ({ attr });
  }
});
