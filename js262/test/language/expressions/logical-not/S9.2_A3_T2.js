

/*---
info: Result of boolean conversion from boolean value is no conversion
es5id: 9.2_A3_T2
description: true and false convert to Boolean by implicit transformation
---*/


if (!(true) !== false) {
  throw new Test262Error('#1: !(true) === false. Actual: ' + (!(true)));	
}


if (!(false) !== true) {
  throw new Test262Error('#2: !(false) === true. Actual: ' + (!(false)));
}
