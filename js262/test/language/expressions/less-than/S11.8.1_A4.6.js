

/*---
info: If y is +Infinity and x !== y, return true
es5id: 11.8.1_A4.6
description: x is number primitive
---*/


if ((0 < Number.POSITIVE_INFINITY) !== true) {
  throw new Test262Error('#1: (0 < +Infinity) === true');
}


if ((1.1 < Number.POSITIVE_INFINITY) !== true) {
  throw new Test262Error('#2: (1.1 < +Infinity) === true');
}


if ((-1.1 < Number.POSITIVE_INFINITY) !== true) {
  throw new Test262Error('#3: (-1.1 < +Infinity) === true');
}


if ((Number.NEGATIVE_INFINITY < Number.POSITIVE_INFINITY) !== true) {
  throw new Test262Error('#4: (-Infinity < +Infinity) === true');
}


if ((Number.MAX_VALUE < Number.POSITIVE_INFINITY) !== true) {
  throw new Test262Error('#5: (Number.MAX_VALUE < +Infinity) === true');
}


if ((Number.MIN_VALUE < Number.POSITIVE_INFINITY) !== true) {
  throw new Test262Error('#6: (Number.MIN_VALUE < +Infinity) === true');
}
