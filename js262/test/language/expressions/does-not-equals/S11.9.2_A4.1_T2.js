

/*---
info: If x or y is NaN, return true
es5id: 11.9.2_A4.1_T2
description: y is NaN
---*/


if ((true != Number.NaN) !== true) {
  throw new Test262Error('#1: (true != NaN) === true');
}


if ((-1 != Number.NaN) !== true) {
  throw new Test262Error('#2: (-1 != NaN) === true');
}


if ((Number.NaN != Number.NaN) !== true) {
  throw new Test262Error('#3: (NaN != NaN) === true');
}


if ((Number.POSITIVE_INFINITY != Number.NaN) !== true) {
  throw new Test262Error('#4: (+Infinity != NaN) === true');
}


if ((Number.NEGATIVE_INFINITY != Number.NaN) !== true) {
  throw new Test262Error('#5: (-Infinity != NaN) === true');
}


if ((Number.MAX_VALUE != Number.NaN) !== true) {
  throw new Test262Error('#6: (Number.MAX_VALUE != NaN) === true');
}


if ((Number.MIN_VALUE != Number.NaN) !== true) {
  throw new Test262Error('#7: (Number.MIN_VALUE != NaN) === true');
}


if (("string" != Number.NaN) !== true) {
  throw new Test262Error('#8: ("string" != NaN) === true');
}


if ((new Object() != Number.NaN) !== true) {
  throw new Test262Error('#9: (new Object() != NaN) === true');
}
