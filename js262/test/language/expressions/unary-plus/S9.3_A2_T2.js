

/*---
info: Result of number conversion from null value is +0
es5id: 9.3_A2_T2
description: null convert to Number by implicit transformation
---*/


if (+(null) !== 0) {
  throw new Test262Error('#1.1: +(null) === 0. Actual: ' + (+(null))); 
} else {
  if (1/+(null) !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#1.2: +(null) === +0. Actual: -0');
  }	
}
