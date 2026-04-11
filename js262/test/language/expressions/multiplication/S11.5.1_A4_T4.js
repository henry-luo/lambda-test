

/*---
info: |
    The result of a floating-point multiplication is governed by the rules of
    IEEE 754 double-precision arithmetics
es5id: 11.5.1_A4_T4
description: >
    Multiplication of an infinity by an infinity results in an
    infinity of appropriate sign
---*/


if (Number.NEGATIVE_INFINITY * Number.NEGATIVE_INFINITY !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#1: -Infinity * -Infinity === Infinity. Actual: ' + (-Infinity * -Infinity));
}


if (Number.POSITIVE_INFINITY * Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#2: Infinity * Infinity === Infinity. Actual: ' + (Infinity * Infinity));
}


if (Number.NEGATIVE_INFINITY * Number.POSITIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
  throw new Test262Error('#3: -Infinity * Infinity === -Infinity. Actual: ' + (-Infinity * Infinity));
}


if (Number.POSITIVE_INFINITY * Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
  throw new Test262Error('#4: Infinity * -Infinity === -Infinity. Actual: ' + (Infinity * -Infinity));
}
