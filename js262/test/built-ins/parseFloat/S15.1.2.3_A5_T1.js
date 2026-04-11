

/*---
info: Return the number value for the MV of Result(4)
esid: sec-parsefloat-string
description: Checking Infinity
---*/


if (parseFloat("Infinity") !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#1: parseFloat("Infinity") === Number.POSITIVE_INFINITY. Actual: ' + (parseFloat("Infinity")));
}


if (parseFloat("+Infinity") !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#2: parseFloat("+Infinity") === Number.POSITIVE_INFINITY. Actual: ' + (parseFloat("+Infinity")));
}


if (parseFloat("-Infinity") !== Number.NEGATIVE_INFINITY) {
  throw new Test262Error('#3: parseFloat("-Infinity") === Number.NEGATIVE_INFINITY. Actual: ' + (parseFloat("-Infinity")));
}
