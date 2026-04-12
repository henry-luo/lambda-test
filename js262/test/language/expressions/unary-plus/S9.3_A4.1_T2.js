

/*---
info: |
    Result of number conversion from number value equals to the input
    argument (no conversion)
es5id: 9.3_A4.1_T2
description: >
    Some numbers including Number.MAX_VALUE and Number.MIN_VALUE are
    converted to Number with implicit transformation
---*/


if (+(13) !== 13) {
  throw new Test262Error('#1: +(13) === 13. Actual: ' + (+(13)));
}


if (+(-13) !== -13) { 
  throw new Test262Error('#2: +(-13) === -13. Actual: ' + (+(-13)));
}


if (+(1.3) !== 1.3) {
  throw new Test262Error('#3: +(1.3) === 1.3. Actual: ' + (+(1.3)));
}


if (+(-1.3) !== -1.3) {
  throw new Test262Error('#4: +(-1.3) === -1.3. Actual: ' + (+(-1.3)));
}
