

/*---
esid: pending
description: Re-throws errors while coercing RegExp's lastIndex
info: |
  RegExp.prototype [ @@matchAll ] ( string )
    [...]
    3. Return ? MatchAllIterator(R, string).

  MatchAllIterator ( R, O )
    [...]
    2. If ? IsRegExp(R) is true, then
      [...]
      f. Let lastIndex be ? ToLength(? Get(R, "lastIndex")).
features: [Symbol.matchAll]
---*/

var regexp = /./;
regexp.lastIndex = {
  valueOf() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  regexp[Symbol.matchAll]('');
});
