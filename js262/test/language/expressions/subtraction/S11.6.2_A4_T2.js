

/*---
info: Operator x - y produces the same result as x + (-y)
es5id: 11.6.2_A4_T2
description: >
    The difference of two infinities of opposite sign is the infinity
    of minuend sign
---*/


if (Number.POSITIVE_INFINITY - Number.NEGATIVE_INFINITY !== Number.POSITIVE_INFINITY ) {
  throw new Test262Error('#1: Infinity - -Infinity === Infinity. Actual: ' + (Infinity - -Infinity));
}


if (Number.NEGATIVE_INFINITY - Number.POSITIVE_INFINITY !== Number.NEGATIVE_INFINITY ) {
  throw new Test262Error('#2: -Infinity - Infinity === -Infinity. Actual: ' + (-Infinity - Infinity));
}
