

/*---
esid: sec-regexp.prototype-@@replace
description: >
  String coercion of "0" property of the value returned by RegExpExec.
info: |
  RegExp.prototype [ @@replace ] ( string, replaceValue )

  [...]
  11. Repeat, while done is false
    a. Let result be ? RegExpExec(rx, S).
    [...]
  14. For each result in results, do
    [...]
    c. Let matched be ? ToString(? Get(result, "0")).
features: [Symbol.replace]
---*/

var r = /./;
var coercibleValue = {
  length: 1,
  0: {
    toString: function() {
      return 'toString value';
    },
    valueOf: function() {
      throw new Test262Error('This method should not be invoked.');
    },
  },
  index: 0,
};
r.exec = function() {
  return coercibleValue;
};

assert.sameValue(
  r[Symbol.replace]('', 'foo[$&]bar'), 'foo[toString value]bar'
);
