

/*---
info: If one expression is undefined or null and another is not, return false
es5id: 11.9.1_A6.2_T1
description: x is null or undefined, y is not
---*/


if ((undefined == true) !== false) {
  throw new Test262Error('#1: (undefined == true) === false');
}


if ((undefined == 0) !== false) {
  throw new Test262Error('#2: (undefined == 0) === false');
}


if ((undefined == "undefined") !== false) {
  throw new Test262Error('#3: (undefined == "undefined") === false');
}


if ((undefined == {}) !== false) {
  throw new Test262Error('#4: (undefined == {}) === false');
}


if ((null == false) !== false) {
  throw new Test262Error('#5: (null == false) === false');
}


if ((null == 0) !== false) {
  throw new Test262Error('#6: (null == 0) === false');
}


if ((null == "null") !== false) {
  throw new Test262Error('#7: (null == "null") === false');
}


if ((null == {}) !== false) {
  throw new Test262Error('#8: (null == {}) === false');
}
