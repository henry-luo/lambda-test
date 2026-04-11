

/*---
info: |
    The result of a floating-point multiplication is governed by the rules of
    IEEE 754 double-precision arithmetics
es5id: 11.5.1_A4_T2
description: >
    The sign of the result is positive if both operands have the same
    sign, negative if the operands have different signs
---*/


if (1 * 1 !== 1) {
  throw new Test262Error('#1: 1 * 1 === 1. Actual: ' + (1 * 1));
}


if (1 * -1 !== -1) {
  throw new Test262Error('#2: 1 * -1 === -1. Actual: ' + (1 * -1));
}


if (-1 * 1 !== -1) {
  throw new Test262Error('#3: -1 * 1 === -1. Actual: ' + (-1 * 1));
}


if (-1 * -1 !== 1) {
  throw new Test262Error('#4: -1 * -1 === 1. Actual: ' + (-1 * -1));
}


if (0 * 0 !== 0) {
  throw new Test262Error('#5.1: 0 * 0 === 0. Actual: ' + (0 * 0));
} else {
  if (1 / (0 * 0) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#5.2: 0 * 0 === + 0. Actual: -0');
  }
}


if (0 * -0 !== -0) {
  throw new Test262Error('#6.1: 0 * -0 === 0. Actual: ' + (0 * -0));
} else {
  if (1 / (0 * -0) !== Number.NEGATIVE_INFINITY) {
    throw new Test262Error('#6.2: 0 * -0 === - 0. Actual: +0');
  }
}


if (-0 * 0 !== -0) {
  throw new Test262Error('#7.1: -0 * 0 === 0. Actual: ' + (-0 * 0));
} else {
  if (1 / (-0 * 0) !== Number.NEGATIVE_INFINITY) {
    throw new Test262Error('#7.2: -0 * 0 === - 0. Actual: +0');
  }
}


if (-0 * -0 !== 0) {
  throw new Test262Error('#8.1: -0 * -0 === 0. Actual: ' + (-0 * -0));
} else {
  if (1 / (-0 * -0) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#8.2: 0 * -0 === - 0. Actual: +0');
  }
}
