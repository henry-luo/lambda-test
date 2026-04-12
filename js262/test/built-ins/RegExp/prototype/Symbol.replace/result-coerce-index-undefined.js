

/*---
esid: sec-regexp.prototype-@@replace
description: >
  Integer coercion of "index" property of the value returned by RegExpExec.
  (undefined value)
info: |
  RegExp.prototype [ @@replace ] ( string, replaceValue )

  [...]
  14. For each result in results, do
    [...]
    e. Let position be ? ToInteger(? Get(result, "index")).
    [...]

  ToInteger ( argument )

  1. Let number be ? ToNumber(argument).
  2. If number is NaN, return +0.
features: [Symbol.toPrimitive, Symbol.replace]
---*/

var index = {};
var toPrimitiveHint;
index[Symbol.toPrimitive] = function(hint) {
  toPrimitiveHint = hint;
};

var r = /./;
r.exec = function() {
  return {
    length: 1,
    0: 'a',
    index: index,
  };
};

assert.sameValue(r[Symbol.replace]('ab', '$`'), 'b');
assert.sameValue(toPrimitiveHint, 'number');
