

/*---
description: |
  RegExpStatics::makeMatch should make an undefined value when the last match had an undefined capture.
info: bugzilla.mozilla.org/show_bug.cgi?id=369778
esid: pending
---*/


var expected = undefined;
var actual;

'x'.replace(/x(.)?/g, function(m, group) { actual = group; })

assert.sameValue(expected, actual)
