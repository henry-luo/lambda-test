

/*---
info: Operator remove leading StrWhiteSpaceChar
esid: sec-parsefloat-string
description: "StrWhiteSpaceChar :: PS (U+2029)"
---*/


if (parseFloat("\u20291.1") !== parseFloat("1.1")) {
  throw new Test262Error('#1: parseFloat("\\u20291.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u20291.1")));
}


if (parseFloat("\u2029\u2029-1.1") !== parseFloat("-1.1")) {
  throw new Test262Error('#2: parseFloat("\\u2029\\u2029-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u2029\u2029-1.1")));
}


assert.sameValue(parseFloat("\u2029"), NaN);
