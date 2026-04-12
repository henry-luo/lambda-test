

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-parsefloat-string
description: "StrWhiteSpaceChar :: FF (U+000C)"
---*/


if (parseFloat("\u000C1.1") !== parseFloat("1.1")) {
  throw new Test262Error('#1: parseFloat("\\u000C1.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u000C1.1")));
}


if (parseFloat("\u000C\u000C-1.1") !== parseFloat("-1.1")) {
  throw new Test262Error('#2: parseFloat("\\u000C\\u000C-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u000C\u000C-1.1")));
}


assert.sameValue(parseFloat("\u000C"), NaN);
