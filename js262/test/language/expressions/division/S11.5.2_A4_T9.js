

/*---
info: |
    The result of division is determined by the specification of IEEE 754
    arithmetics
es5id: 11.5.2_A4_T9
description: >
    If the magnitude is too large to represent, the result is then an
    infinity of appropriate sign
---*/


if (Number.MAX_VALUE / 0.9 !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#1: Number.MAX_VALUE / 0.9 === Number.POSITIVE_INFINITY. Actual: ' + (Number.MAX_VALUE / 0.9));
}


if (Number.MAX_VALUE / -0.9 !== Number.NEGATIVE_INFINITY) {
  throw new Test262Error('#2: Number.MAX_VALUE / -0.9 === Number.NEGATIVE_INFINITY. Actual: ' + (Number.MAX_VALUE / -0.9));
} 


if (Number.MAX_VALUE / 1 !== Number.MAX_VALUE) {
  throw new Test262Error('#3: Number.MAX_VALUE / 1 === Number.MAX_VALUE. Actual: ' + (Number.MAX_VALUE / 1));
}


if (Number.MAX_VALUE / -1 !== -Number.MAX_VALUE) {
  throw new Test262Error('#4: Number.MAX_VALUE / -1 === -Number.MAX_VALUE. Actual: ' + (Number.MAX_VALUE / -1));
} 


if (Number.MAX_VALUE / (Number.MAX_VALUE / 0.9) === (Number.MAX_VALUE / Number.MAX_VALUE) / 0.9) {
  throw new Test262Error('#5: Number.MAX_VALUE / (Number.MAX_VALUE / 0.9) !== (Number.MAX_VALUE / Number.MAX_VALUE) / 0.9');
}
