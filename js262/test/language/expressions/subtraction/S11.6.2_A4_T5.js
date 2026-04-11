

/*---
info: Operator x - y produces the same result as x + (-y)
es5id: 11.6.2_A4_T5
description: >
    Using the rule of sum of two zeroes and the fact that a - b = a +
    (-b)
---*/


if (-0 - -0 !== 0 ) {  
  throw new Test262Error('#1.1: -0 - -0 === 0. Actual: ' + (-0 - -0));
} else {
  if (1 / (-0 - -0) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#1.2: -0 - -0 === + 0. Actual: -0');
  }
}


if (0 - -0 !== 0 ) {  
  throw new Test262Error('#2.1: 0 - -0 === 0. Actual: ' + (0 - -0));
} else {
  if (1 / (0 - -0) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#2.2: 0 - -0 === + 0. Actual: -0');
  }
}


if (-0 - 0 !== -0 ) {  
  throw new Test262Error('#3.1: -0 - 0 === 0. Actual: ' + (-0 - 0));
} else {
  if (1 / (-0 - 0) !== Number.NEGATIVE_INFINITY) {
    throw new Test262Error('#3.2: -0 - 0 === - 0. Actual: +0');
  }
}


if (0 - 0 !== 0 ) {  
  throw new Test262Error('#4.1: 0 - 0 === 0. Actual: ' + (0 - 0));
} else {
  if (1 / (0 - 0) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#4.2: 0 - 0 === + 0. Actual: -0');
  }
}
