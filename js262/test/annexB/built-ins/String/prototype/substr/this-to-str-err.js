

/*---
esid: sec-string.prototype.substr
es6id: B.2.3.1
description: Behavior when string conversion triggers an abrupt completion
info: |
    1. Let O be ? RequireObjectCoercible(this value).
    2. Let S be ? ToString(O).
---*/

var substr = String.prototype.substr;
var thisValue = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  substr.call(thisValue);
});
