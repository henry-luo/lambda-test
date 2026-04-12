

/*---
esid: sec-string.prototype.substr
es6id: B.2.3.1
description: >
    Behavior when "length" integer conversion triggers an abrupt completion
info: |
    [...]
    3. Let intStart be ? ToInteger(start).
features: [Symbol]
---*/

var symbol = Symbol('');
var len = {
  valueOf: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  ''.substr(0, len);
});

assert.throws(TypeError, function() {
  ''.substr(0, symbol);
});
