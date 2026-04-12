

/*---
esid: pending
description: String coercion of `string` argument
info: |
  RegExp.prototype [ @@matchAll ] ( string )
    [...]
    3. Return ? MatchAllIterator(R, string).

  MatchAllIterator ( R, O )
    1. Let S be ? ToString(O).
features: [Symbol.matchAll]
includes: [compareArray.js, compareIterator.js, regExpUtils.js]
---*/

var str = 'a*b';
var obj = {
  toString() {
    return str;
  }
};
var regexp = /\w/g;

assert.compareIterator(regexp[Symbol.matchAll](obj), [
  matchValidator(['a'], 0, str),
  matchValidator(['b'], 2, str)
]);

