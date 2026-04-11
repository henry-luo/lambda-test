

/*---
esid: sec-escape-string
es6id: B.2.1.1
description: Abrupt completion from `ToString` operation (Symbol value)
info: |
    1. Let string be ? ToString(string).
features: [Symbol]
---*/

var s = Symbol('');

assert.throws(TypeError, function() {
  escape(s);
});
