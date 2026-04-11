

/*---
esid: sec-unescape-string
es6id: B.2.1.2
description: Abrupt completion from `ToString` operation (Symbol value)
info: |
    1. Let string be ? ToString(string).
features: [Symbol]
---*/

var s = Symbol('');

assert.throws(TypeError, function() {
  unescape(s);
});
