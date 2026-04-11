

/*---
info: Operator x - y produces the same result as x + (-y)
es5id: 11.6.2_A4_T3
description: The difference of two infinities of the same sign is NaN
---*/


if (isNaN(Number.POSITIVE_INFINITY - Number.POSITIVE_INFINITY) !== true ) {
  throw new Test262Error('#1: Infinity - Infinity === Not-a-Number. Actual: ' + (Infinity - Infinity));
}


if (isNaN(Number.NEGATIVE_INFINITY - Number.NEGATIVE_INFINITY) !== true ) {
  throw new Test262Error('#2: -Infinity - -Infinity === Not-a-Number. Actual: ' + (-Infinity - -Infinity));
}
