

/*---
info: |
    The result of an addition is determined using the rules of IEEE 754
    double-precision arithmetics
es5id: 11.6.1_A4_T2
description: The sum of two infinities of opposite sign is NaN
---*/


if (isNaN(Number.POSITIVE_INFINITY + Number.NEGATIVE_INFINITY) !== true ) {
  throw new Test262Error('#1: Infinity + -Infinity === Not-a-Number. Actual: ' + (Infinity + -Infinity));
}


if (isNaN(Number.NEGATIVE_INFINITY + Number.POSITIVE_INFINITY) !== true ) {
  throw new Test262Error('#2: -Infinity + Infinity === Not-a-Number. Actual: ' + (-Infinity + Infinity));
}
