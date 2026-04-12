

/*---
esid: sec-string.prototype.replaceall
description: >
  Return abrupt from Call(replaceValue, ...)
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  ...
  5. Let functionalReplace be IsCallable(replaceValue).
  ...
  14. For each position in matchPositions, do
    a. If functionalReplace is true, then
      i. Let replacement be ? ToString(? Call(replaceValue, undefined, « searchString, position, string »).
features: [String.prototype.replaceAll]
---*/

function custom() {
  throw new Test262Error();
}

assert.throws(Test262Error, function() {
  'a'.replaceAll('a', custom);
});
