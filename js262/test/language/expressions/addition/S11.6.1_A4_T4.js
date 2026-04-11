

/*---
info: |
    The result of an addition is determined using the rules of IEEE 754
    double-precision arithmetics
es5id: 11.6.1_A4_T4
description: >
    The sum of an infinity and a finite value is equal to the infinite
    operand
---*/


if (Number.POSITIVE_INFINITY + 1 !== Number.POSITIVE_INFINITY ) {
  throw new Test262Error('#1: Infinity + 1 === Infinity. Actual: ' + (Infinity + 1));
}


if (-1 + Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY ) {
  throw new Test262Error('#2: -1 + Infinity === Infinity. Actual: ' + (-1 + Infinity));
}


if (Number.NEGATIVE_INFINITY + 1 !== Number.NEGATIVE_INFINITY ) {
  throw new Test262Error('#3: -Infinity + 1 === -Infinity. Actual: ' + (-Infinity + 1));
}


if (-1 + Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY ) {
  throw new Test262Error('#4: -1 + -Infinity === -Infinity. Actual: ' + (-1 + -Infinity));
}


if (Number.POSITIVE_INFINITY + Number.MAX_VALUE !== Number.POSITIVE_INFINITY ) {
  throw new Test262Error('#5: Infinity + Number.MAX_VALUE === Infinity. Actual: ' + (Infinity + Number.MAX_VALUE));
}


if (-Number.MAX_VALUE + Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY ) {
  throw new Test262Error('#6: -Number.MAX_VALUE + Infinity === Infinity. Actual: ' + (-Number.MAX_VALUE + Infinity));
}


if (Number.NEGATIVE_INFINITY + Number.MAX_VALUE !== Number.NEGATIVE_INFINITY ) {
  throw new Test262Error('#7: -Infinity + Number.MAX_VALUE === -Infinity. Actual: ' + (-Infinity + Number.MAX_VALUE));
}


if (-Number.MAX_VALUE + Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY ) {
  throw new Test262Error('#8: -Number.MAX_VALUE + -Infinity === -Infinity. Actual: ' + (-Number.MAX_VALUE + -Infinity));
}
