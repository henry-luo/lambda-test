

/*---
esid: sec-escape-string
es6id: B.2.1.1
description: Abrupt completion from `ToString` operation
info: |
    1. Let string be ? ToString(string).
---*/

var obj = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  escape(obj);
});
