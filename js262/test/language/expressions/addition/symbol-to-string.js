

/*---
esid: sec-addition-operator-plus
es6id: 12.7.3
description: Symbol value cannot be converted to a String
info: |
    [...]
    7. If Type(lprim) is String or Type(rprim) is String, then
       a. Let lstr be ? ToString(lprim).
features: [Symbol]
---*/

var s = Symbol('66');
assert.throws(TypeError, function() {
  s + '';
});
