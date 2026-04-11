

/*---
info: |
    Type(x) and Type(y) are Number-s minus NaN, +0, -0.
    Return false, if x is the same number value as y; otherwise, return true
es5id: 11.9.5_A4.3
description: x and y are primitive numbers
---*/


if (Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY) {
  throw new Test262Error('#1: +Infinity === +Infinity');
}


if (Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
  throw new Test262Error('#2: -Infinity === -Infinity');
}


if (13 !== 13) {
  throw new Test262Error('#3: 13 === 13');
}


if (-13 !== -13) {
  throw new Test262Error('#4: -13 === -13');
}


if (1.3 !== 1.3) {
  throw new Test262Error('#5: 1.3 === 1.3');
}


if (-1.3 !== -1.3) {
  throw new Test262Error('#6: -1.3 === -1.3');
}


if (Number.POSITIVE_INFINITY !== -Number.NEGATIVE_INFINITY) {
  throw new Test262Error('#7: +Infinity === -(-Infinity)');
}


if (!(1 !== 0.999999999999)) {
  throw new Test262Error('#8: 1 !== 0.999999999999');
}


if (1.0 !== 1) {
  throw new Test262Error('#9: 1.0 === 1');
}
