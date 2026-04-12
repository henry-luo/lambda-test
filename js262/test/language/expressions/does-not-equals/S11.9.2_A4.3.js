

/*---
info: |
    Type(x) and Type(y) are Number-s minus NaN, +0, -0.
    Return false, if x is the same number value as y; otherwise, return true
es5id: 11.9.2_A4.3
description: x and y are primitive numbers
---*/


if ((Number.POSITIVE_INFINITY != Number.POSITIVE_INFINITY) !== false) {
  throw new Test262Error('#1: (+Infinity != +Infinity) === false');
}


if ((Number.NEGATIVE_INFINITY != Number.NEGATIVE_INFINITY) !== false) {
  throw new Test262Error('#2: (-Infinity != -Infinity) === false');
}


if ((Number.POSITIVE_INFINITY != -Number.NEGATIVE_INFINITY) !== false) {
  throw new Test262Error('#3: (+Infinity != -(-Infinity)) === false');
}


if ((1 != 0.999999999999) !== true) {
  throw new Test262Error('#4: (1 != 0.999999999999) === true');
}


if ((1.0 != 1) !== false) {
  throw new Test262Error('#5: (1.0 != 1) === false');
}
