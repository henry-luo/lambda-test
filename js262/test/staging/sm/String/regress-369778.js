

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-String-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var BUGNUMBER = 369778;
var summary =
  "RegExpStatics::makeMatch should make an undefined value when the last " +
  "match had an undefined capture.";

print(BUGNUMBER + ": " + summary);


var expected = undefined;
var actual;

'x'.replace(/x(.)?/g, function(m, group) { actual = group; })

print("expected: " + expected)
print("actual: " + actual)

assert.sameValue(expected, actual)

