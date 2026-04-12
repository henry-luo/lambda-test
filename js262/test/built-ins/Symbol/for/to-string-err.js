

/*---
esid: sec-symbol.for
description: Error resulting from string coercion of first argument
info: |
    1. Let stringKey be ? ToString(key).
features: [Symbol]
---*/

var subject = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  Symbol.for(subject);
});

subject = Symbol('s');

assert.throws(TypeError, function() {
  Symbol.for(subject);
});
