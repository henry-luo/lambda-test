

/*---
info: |
    The result of division is determined by the specification of IEEE 754
    arithmetics
es5id: 11.5.2_A4_T2
description: >
    The sign of the result is positive if both operands have the same
    sign, negative if the operands have different signs
---*/


if (1 / 1 !== 1) {
  throw new Test262Error('#1: 1 / 1 === 1. Actual: ' + (1 / 1));
}


if (1 / -1 !== -1) {
  throw new Test262Error('#2: 1 / -1 === -1. Actual: ' + (1 / -1));
}


if (-1 / 1 !== -1) {
  throw new Test262Error('#3: -1 / 1 === -1. Actual: ' + (-1 / 1));
}


if (-1 / -1 !== 1) {
  throw new Test262Error('#4: -1 / -1 === 1. Actual: ' + (-1 / -1));
}
