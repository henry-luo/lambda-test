

/*---
esid: sec-string.prototype.fontcolor
es6id: B.2.3.7
description: Abrupt completion when coercing "this" value to string
info: |
    B.2.3.2.1 Runtime Semantics: CreateHTML

    [...]
    4. If attribute is not the empty String, then
       a. Let V be ? ToString(value).
---*/

var attr = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  ''.fontcolor(attr);
});
